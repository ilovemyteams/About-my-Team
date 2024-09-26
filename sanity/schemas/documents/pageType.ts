import { DocumentsIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

import { getEnglishTitleFromBlocks } from "@/sanity/utils/getEnglishTitleFromBlocks";
import { validateIsRequired } from "@/sanity/utils/validateIsRequired";
import { validatePageSlug } from "@/sanity/utils/validatePageSlug";
import { InternationalizedArrayPortableColorTitle } from "@/types/sanity.types";

export const pageType = defineType({
    name: "page",
    type: "document",
    title: "Pages",
    icon: DocumentsIcon,
    fields: [
        defineField({
            name: "title",
            title: "Page title",
            description:
                "Сhoose the accent color of specific words for each language",
            type: "internationalizedArrayPortableColorTitle",
            validation: Rule => Rule.custom(validateIsRequired),
        }),
        defineField({
            title: "Page Slug",
            name: "pageSlug",
            type: "slug",
            options: {
                source: doc =>
                    getEnglishTitleFromBlocks(
                        doc.title as InternationalizedArrayPortableColorTitle
                    ),
                maxLength: 50,
                slugify: input =>
                    input.toLowerCase().replace(/\s+/g, "-").slice(0, 50),
            },
            validation: Rule => Rule.custom(validatePageSlug).required(),
        }),

        defineField({
            name: "pageBuilder",
            type: "array",
            title: "Page builder",
            description: "Сhoose necessary sections for this page",
            of: [
                defineArrayMember({
                    name: "hero",
                    type: "heroHome",
                }),

                defineArrayMember({
                    name: "callToAction",
                    type: "callToAction",
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            const engLishTitle = getEnglishTitleFromBlocks(title);
            return {
                title: engLishTitle,
                subtitle: "Page",
            };
        },
    },
});
