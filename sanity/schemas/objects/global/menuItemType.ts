import { defineField } from "sanity";
import { validateIsRequired } from "@/sanity/utils/validateIsRequired";
import { InternationalizedArrayString } from "@/types/sanity.types";

export const menuItemType = defineField({
    name: "menuItem",
    title: "Menu Item",
    type: "object",
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
            validation: Rule =>
                Rule.uri({
                    allowRelative: true,
                }).custom(link => {
                    if (link && !link.startsWith("/")) {
                        return "The link must start with '/' for internal links.";
                    }
                    return true;
                }),
            description:
                "Enter an internal link to the page (e.g., /about, /faq).",
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            const englishTitle =
                (title as InternationalizedArrayString).find(
                    item => item._key === "en"
                )?.value || "No title";
            return {
                title: `${englishTitle || "No title"}`,
            };
        },
    },
});
