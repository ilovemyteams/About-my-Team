import { defineField } from "sanity";

export const buttonType = defineField({
    name: "button",
    title: "Button",
    type: "object",
    fields: [
        defineField({
            name: "buttonName",
            title: "Button name",
            type: "internationalizedArrayString",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "buttonLink",
            title: "Button type link",
            type: "string",
            options: {
                list: [
                    { title: "No link", value: "noLink" },
                    { title: "Internal", value: "internal" },
                    { title: "External", value: "external" },
                ],
            },
            initialValue: "noLink",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "linkInternal",
            title: "Internal Link",
            type: "linkInternal",
            hidden: ({ parent }) => parent?.buttonLink !== "internal",
        }),
        defineField({
            name: "linkExternal",
            title: "External Link",
            type: "linkExternal",
            hidden: ({ parent }) => parent?.buttonLink !== "external",
        }),
    ],
});
