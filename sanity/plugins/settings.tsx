/**
 * This plugin contains all the logic for setting up the singletons
 */

import { type DocumentDefinition } from "sanity";
import { ListItemBuilder, type StructureResolver } from "sanity/structure";

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
                        templateItem => !types.includes(templateItem.templateId)
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
            .items([...singletonItems, S.divider(), ...defaultListItems]);
    };
};
