import { defineField } from "sanity";

export const buttonType = defineField({
    name: "button",
    title: "Button",
    description: "Please chose type of link, name and color",
    type: "object",
    fields: [
        defineField({
            name: "linkName",
            title: "Button name",
            type: "internationalizedArrayString",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "buttonColor",
            description: "Please choose button color type",
            type: "string",
            options: {
                list: ["Red", "White"],
                layout: "radio",
            },
            initialValue: "Red",
        }),
        defineField({
            name: "linkType",
            title: "Link Type",
            type: "string",
            options: {
                list: [
                    { title: "Internal", value: "internal" },
                    { title: "External", value: "external" },
                ],
                layout: "radio",
            },
            initialValue: "internal",
        }),
        defineField({
            name: "linkInternal",
            title: "Internal Link",
            type: "linkInternal",
            hidden: ({ parent }) => parent?.linkType !== "internal",
        }),
        defineField({
            name: "linkExternal",
            title: "External Link",
            type: "url",
            hidden: ({ parent }) => parent?.linkType !== "external",
        }),
    ],
    validation: Rule =>
        Rule.custom(fields => {
            if (fields?.linkType === "internal" && !fields?.linkInternal) {
                return "Internal link is required.";
            }
            if (fields?.linkType === "external" && !fields?.linkExternal) {
                return "External link is required.";
            }
            return true;
        }),
});
