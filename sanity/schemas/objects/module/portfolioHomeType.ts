import { defineField } from "sanity";

export const portfolioHomeType = defineField({
    name: "portfolioHome",
    title: "Portfolio",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Portfolio title",
            description:
                "Please, choose proper color of the text for each language",
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
