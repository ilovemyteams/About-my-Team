import { StarIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { validateIsRequired } from "@/sanity/utils/validateIsRequired";
import { InternationalizedArrayString } from "@/types/sanity.types";

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
            validation: rule => rule.custom(validateIsRequired),
        }),
        defineField({
            name: "description",
            type: "internationalizedArrayText",
            title: "Service description",
            validation: rule => rule.custom(validateIsRequired),
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
                (title as InternationalizedArrayString).find(
                    item => item._key === "en"
                )?.value || "No title";
            return {
                title: englishTitle,
            };
        },
    },
});
