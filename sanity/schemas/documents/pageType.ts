import { defineArrayMember, defineField, defineType } from "sanity";

import { generatePageSlug } from "@/sanity/utils/generatePageSlug";
import { getEnglishTitleFromBlocks } from "@/sanity/utils/getEnglishTitleFromBlocks";
import { validateIsRequired } from "@/sanity/utils/validateIsRequired";
import { validatePageSlug } from "@/sanity/utils/validatePageSlug";
import { Page } from "@/types/sanity.types";

const SLUG_MAX_LENGTH = 40;

export const pageType = defineType({
    name: "page",
    type: "document",
    title: "Page",
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
                source: doc => generatePageSlug(doc as Page, SLUG_MAX_LENGTH),
                slugify: input =>
                    input
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .slice(0, SLUG_MAX_LENGTH - 1),
            },
            validation: Rule => Rule.custom(validatePageSlug(SLUG_MAX_LENGTH)),
        }),
        defineField({
            name: "parentPage",
            title: "Parent page (optional)",
            description: "Select parent page only if current page is nested",
            type: "reference",
            to: [{ type: "page" }],
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
            const englishTitle = getEnglishTitleFromBlocks(title);
            return {
                title: englishTitle,
                subtitle: "Page",
            };
        },
    },
});
