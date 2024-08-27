import { defineField } from "sanity";

export const heroHomeType = defineField({
    name: "heroHome",
    title: "Hero",
    type: "object",
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
        defineField({
            name: "buttonJoinUS",
            title: "Button Join Us",
            type: "button",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "buttonWriteUs",
            title: "Button Write Us",
            type: "button",
            validation: Rule => Rule.required(),
        }),
    ],
});
