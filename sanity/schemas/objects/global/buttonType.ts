import { defineField } from "sanity";

import { validateIsRequired } from "@/sanity/utils/validateIsRequired";
import { validateMaxLength } from "@/sanity/utils/validateMaxLength";

const MAX_LENGTH = 18;

export const buttonType = defineField({
    name: "button",
    title: "Button",
    type: "object",
    options: {
        collapsed: false,
        collapsible: true,
    },
    fields: [
        defineField({
            name: "buttonName",
            title: "Button name",
            type: "internationalizedArrayString",
            validation: rule =>
                rule
                    .custom(validateIsRequired)
                    .custom(validateMaxLength(MAX_LENGTH)),
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
                    { title: "Internal Site Page Link", value: "pageBuilder" },
                ],
            },
            initialValue: "noLink",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "linkInternal",
            title: "Internal Link",
            description:
                "Select the page from the list to which you want to link.",
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
