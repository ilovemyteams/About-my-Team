import { defineField } from "sanity";

export const portfolioHomeType = defineField({
    name: "portfolioHome",
    title: "Portfolio",
    type: "object",
    options: {
        collapsed: false,
        collapsible: true,
    },
    fields: [
        defineField({
            name: "sectionId",
            type: "anchorLink",
            title: "Anchor Link",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "title",
            title: "Portfolio title",
            description:
                "Сhoose the accent color of specific words for each language",
            type: "internationalizedArrayPortableColorTitle",
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
