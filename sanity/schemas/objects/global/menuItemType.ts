import { FcRedo } from "react-icons/fc";
import { defineField } from "sanity";

import { getEnglishTitleFromIntArrays } from "@/sanity/utils/getEnglishTitleFromIntArrays";
import { validateIsRequired } from "@/sanity/utils/validateIsRequired";

export const menuItemType = defineField({
    name: "menuItem",
    title: "Menu Item",
    type: "object",
    icon: FcRedo,
    fields: [
        defineField({
            name: "title",
            type: "internationalizedArrayString",
            title: "Menu Item Title",
            validation: rule => rule.custom(validateIsRequired),
        }),
        defineField({
            name: "linkInternal",
            type: "url",
            title: "Internal Link",
            initialValue: props => {
                return props.value ? props.value.toLowerCase() : "";
            },
            validation: Rule =>
                Rule.uri({
                    allowRelative: true,
                }).custom(link => {
                    if (!link) {
                        return true;
                    }
                    if (!link.startsWith("/")) {
                        return "The link must start with '/' for internal links.";
                    }
                    if (/[A-Z]/.test(link)) {
                        return "The link should not contain uppercase letters.";
                    }
                    if (/[^a-z0-9/\-_]/.test(link)) {
                        return "The link contains invalid characters. Only lowercase letters, numbers, '/', '-', and '_' are allowed.";
                    }

                    return true;
                }),
            description:
                "Enter an internal link to the page (e.g., /about-us, /faq).",
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            const englishTitle = getEnglishTitleFromIntArrays(title);
            return {
                title: englishTitle,
            };
        },
    },
});
