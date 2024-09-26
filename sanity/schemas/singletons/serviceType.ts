import { StarIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { getEnglishTitleFromIntArrays } from "@/sanity/utils/getEnglishTitleFromIntArrays";
import { validateIsRequired } from "@/sanity/utils/validateIsRequired";

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
            const englishTitle = getEnglishTitleFromIntArrays(title);
            return {
                title: englishTitle,
            };
        },
    },
});
