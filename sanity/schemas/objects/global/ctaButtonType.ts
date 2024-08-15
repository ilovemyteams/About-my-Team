import { defineField } from "sanity";

export const ctaButtonType = defineField({
    name: "ctaButton",
    title: "CTA Button",
    type: "object",
    fields: [
        defineField({
            name: "buttonName",
            title: "Button name",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "link",
            title: "Button link",
            type: "linkExternal",
        }),
    ],
});
