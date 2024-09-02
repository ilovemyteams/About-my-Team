import { StarIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { FieldItem } from "@/sanity/interfaces/interfaces";

export const serviceType = defineField({
    name: "service",
    title: "Services",
    type: "document",
    icon: StarIcon,
    fields: [
        defineField({
            name: "title",
            type: "internationalizedArrayString",
            title: "Service title",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "description",
            type: "internationalizedArrayText",
            title: "Service description",
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
