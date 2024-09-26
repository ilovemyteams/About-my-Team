import { defineArrayMember, defineField, defineType } from "sanity";

import { InternationalizedArrayPortableColorTitle } from "@/types/sanity.types";
import { validateIsRequired } from "@/sanity/utils/validateIsRequired";
import { getEnglishTitleFromBlocks } from "@/sanity/utils/getEnglishTitleFromBlocks";
import { validatePageSlug } from "@/sanity/utils/validatePageSlug";

export const pagesType = defineType({
    name: "pages",
    type: "document",
    title: "Pages",
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
