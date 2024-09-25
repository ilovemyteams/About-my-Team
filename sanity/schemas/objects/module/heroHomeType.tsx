import { defineField } from "sanity";

export const heroHomeType = defineField({
    name: "heroHome",
    title: "Hero",
    type: "object",
    options: {
        collapsed: false,
        collapsible: true,
    },
    fields: [
        defineField({
            name: "title",
            title: "Hero title",
            type: "internationalizedArrayText",
            validation: Rule => Rule.required(),
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
});