import { CodeBlockIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { getEnglishTitleFromIntArrays } from "@/sanity/utils/getEnglishTitleFromIntArrays";
import { validateIsRequired } from "@/sanity/utils/validateIsRequired";

export const heroHomeType = defineField({
    name: "heroHome",
    title: "Hero",
    type: "object",
    icon: CodeBlockIcon,
    options: {
        collapsed: false,
        collapsible: true,
    },
    fields: [
        defineField({
            name: "title",
            title: "Hero title",
            type: "internationalizedArrayText",
            validation: Rule => Rule.custom(validateIsRequired),
        }),
        defineField({
            name: "portfolioSlider",
            title: "Portfolio slider",
            description:
                "Choose the projects that should be displayed in the slider",
            type: "array",
            of: [{ type: "reference", to: [{ type: "project" }] }],
            validation: Rule => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            const englishTitle = getEnglishTitleFromIntArrays(title);
            return {
                title: englishTitle,
                media: CodeBlockIcon,
            };
        },
    },
});
