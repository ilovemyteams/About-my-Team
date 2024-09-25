import { defineField } from "sanity";
import { InternationalizedArrayString } from "@/types/sanity.types";

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
                rule.custom<InternationalizedArrayString>(value => {
                    if (!value || value.every(item => !item.value)) {
                        return "Button name is required";
                    } else {
                        const invalidItems = value?.filter(
                            item =>
                                item?.value && item.value.length > MAX_LENGTH
                        );

                        if (invalidItems.length) {
                            return "Button name is too long. A maximum of 18 characters is allowed";
                        }
                    }
                    return true;
                }),
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
