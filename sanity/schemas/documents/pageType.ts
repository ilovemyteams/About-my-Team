import { DocumentsIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

import { getEnglishTitleFromBlocks } from "@/sanity/utils/getEnglishTitleFromBlocks";
import { validateIsRequired } from "@/sanity/utils/validateIsRequired";
import { validatePageSlug } from "@/sanity/utils/validatePageSlug";
import { InternationalizedArrayPortableColorTitle } from "@/types/sanity.types";

const SLUG_MAX_LENGTH = 50;

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
                    input
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .slice(0, SLUG_MAX_LENGTH - 1),
            },
            validation: Rule =>
                Rule.custom(validatePageSlug(SLUG_MAX_LENGTH)).required(),
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
        defineField({
            name: "seo",
            title: "SEO (optional)",
            description:
                "Specify the SEO title, description, and image for this page only if they are to be different from the SEO in Settings",
            type: "seo",
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
