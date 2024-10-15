/**
 * This plugin contains all the logic for setting up the singletons
 */
import { type DocumentDefinition } from "sanity";
import {
    type DocumentBuilder,
    type DocumentListBuilder,
    ListItemBuilder,
    type StructureBuilder,
    type StructureResolver,
} from "sanity/structure";

import { getClient } from "../lib/client";
import { getEnglishTitleFromIntArrays } from "../utils/getEnglishTitleFromIntArrays";

async function nestedContentPageList(
    id: string,
    S: StructureBuilder
): Promise<DocumentListBuilder | DocumentBuilder> {
    const page = await getClient().fetch(
        `*[_id == $id || _id == "drafts.${id}"][0] { title, _id, _type }`,
        { id }
    );

    const englishTitle = getEnglishTitleFromIntArrays(page?.title);

    const hasChildren = await getClient().fetch(
        `count(*[
          parentPage._ref == $id || 
          parentPage._ref == "drafts.${id}"
        ]) > 0`,
        { id }
    );

    if (hasChildren) {
        return S.documentTypeList("page")
            .title(`Page ${englishTitle} and nested pages list`)
            .filter(
                `(
                $id == _id || "drafts.${id}" == _id ||
                $id == parentPage._ref || "drafts.${id}" == parentPage._ref ||
                $id == parentPage.parentPage._ref || "drafts.${id}" == parentPage.parentPage._ref ||
                $id == parentPage.parentPage.parentPage._ref || "drafts.${id}" == parentPage.parentPage.parentPage._ref ||
                $id == parentPage.parentPage.parentPage.parentPage._ref || "drafts.${id}" == parentPage.parentPage.parentPage.parentPage._ref
            )`
            )
            .params({ id })
            .child((id: string) =>
                id === page?._id || `drafts.${id}` === page?._id
                    ? S.document()
                          .schemaType("page")
                          .views([S.view.form()])
                          .id(id)
                    : nestedContentPageList(id, S)
            );
    }

    // If no children, just return the document form view

    return S.document().schemaType("page").views([S.view.form()]).id(id);
}

const hiddenDocTypes = (listItem: ListItemBuilder) => {
    const id = listItem.getId();

    if (!id) {
        return false;
    }

    return !["home", "media.tag", "page", "settings"].includes(id);
};

export const singletonPlugin = (types: string[]) => {
    return {
        name: "singletonPlugin",
        document: {
            // Hide 'Singletons (such as Home)' from new document options
            // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
            // @ts-expect-error: Parameter 'prev' implicitly has an 'any' type.
            newDocumentOptions: (prev, { creationContext }) => {
                if (creationContext.type === "global") {
                    return prev.filter(
                        // @ts-expect-error: Parameter 'templateItem' implicitly has an 'any' type.
                        templateItem => {
                            return !types.includes(templateItem.templateId);
                        }
                    );
                }

                return prev;
            },
            // Removes the "duplicate" action on the Singletons (such as Home)
            // @ts-expect-error: Parameter 'prev' implicitly has an 'any' type.
            actions: (prev, { schemaType }) => {
                if (types.includes(schemaType)) {
                    // @ts-expect-error: Parameter 'templateItem' implicitly has an 'any' type.
                    return prev.filter(({ action }) => action !== "duplicate");
                }

                return prev;
            },
        },
    };
};

// The StructureResolver is how we're changing the DeskTool structure to linking to document (named Singleton)
// like how "Home" is handled.
export const pageStructure = (
    typeDefArray: DocumentDefinition[]
): StructureResolver => {
    return S => {
        const pagesItem = S.listItem()
            .id("pages-list")
            .title("Pages")
            .schemaType("page")
            .child(
                S.documentTypeList("page")
                    .title("Top-level pages list")
                    .filter('!defined(parentPage) && _type == "page"')
                    .child(id => nestedContentPageList(id, S))
            );

        // Goes through all of the singletons that were provided and translates them into something the
        // Desktool can understand

        const singletonItems = typeDefArray.map(typeDef => {
            return S.listItem()
                .title(typeDef.title!)
                .icon(typeDef.icon)
                .child(
                    S.editor()
                        .id(typeDef.name)
                        .schemaType(typeDef.name)
                        .documentId(typeDef.name)
                );
        });

        // The default root list items (except custom ones)
        const defaultListItems = S.documentTypeListItems()
            .filter(
                listItem =>
                    !typeDefArray.find(
                        singleton => singleton.name === listItem.getId()
                    )
            )
            .filter(hiddenDocTypes);

        return S.list()
            .title("Content")
            .items([
                pagesItem,
                ...singletonItems,
                S.divider(),
                ...defaultListItems,
            ]);
    };
};
