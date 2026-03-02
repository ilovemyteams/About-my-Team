import { FcDocument } from "react-icons/fc";
import { defineArrayMember, defineField, defineType } from "sanity";

import { generatePageSlug } from "@/sanity/utils/generatePageSlug";
import { getEnglishTitleFromIntArrays } from "@/sanity/utils/getEnglishTitleFromIntArrays";
import { validateIsRequired } from "@/sanity/utils/validateIsRequired";
import { validatePageSlug } from "@/sanity/utils/validatePageSlug";
import { Page } from "@/types/sanity.types";

const SLUG_MAX_LENGTH = 100;

export const pageType = defineType({
    name: "page",
    type: "document",
    title: "Page",
    icon: FcDocument,
    fields: [
        defineField({
            name: "title",
            title: "Page name",
            description:
                "Enter the name of the page, this page name will be displayed in breadcrumbs and a slug will be created based on it.",
            type: "internationalizedArrayString",
            validation: Rule => Rule.custom(validateIsRequired),
        }),
        defineField({
            name: "parentPage",
            title: "Parent page (optional)",
            description: "Select parent page only if current page is nested",
            type: "reference",
            to: [{ type: "page" }],
        }),

        defineField({
            title: "Page Slug",
            name: "pageSlug",
            type: "slug",
            options: {
                source: doc => generatePageSlug(doc as Page, SLUG_MAX_LENGTH),
                slugify: input => input,
            },
            validation: Rule => Rule.custom(validatePageSlug(SLUG_MAX_LENGTH)),
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
            subtitle: "pageSlug.current",
        },
        prepare({ title, subtitle }) {
            const englishTitle = getEnglishTitleFromIntArrays(title);
            return {
                title: englishTitle,
                subtitle: `/${subtitle}`,
            };
        },
    },
});
