import { RocketIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { FieldItem } from "@/sanity/interfaces/interfaces";

export const toolType = defineField({
    name: "tool",
    title: "Tools",
    type: "document",
    icon: RocketIcon,
    fields: [
        defineField({
            name: "title",
            type: "internationalizedArrayString",
            title: "Tool title",
            validation: rule => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            if (!title) {
                return {
                    title: "No title",
                };
            }
            const englishTitle =
                (title as FieldItem[]).find(
                    (item: FieldItem) => item._key === "en"
                )?.value || "No title";
            return {
                title: englishTitle,
            };
        },
    },
});
