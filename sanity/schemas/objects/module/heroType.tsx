import { defineField } from "sanity";

export const heroType = defineField({
    name: "hero",
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
        defineField({
            name: "buttonBuyMeCoffee",
            title: "Button Buy me a coffee",
            type: "button",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "buttonPortfolio",
            title: "Button Portfolio",
            type: "button",
            validation: Rule => Rule.required(),
        }),
    ],
});
