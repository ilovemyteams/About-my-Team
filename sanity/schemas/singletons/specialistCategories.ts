import { CaseIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { InternationalizedArrayString } from "@/types/sanity.types";

export const specialistCategoryType = defineField({
    name: "specialistCategory",
    title: "Specialist categories",
    type: "document",
    icon: CaseIcon,
    fields: [
        defineField({
            name: "title",
            type: "internationalizedArrayString",
            title: "Specialist category name",
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
                (title as InternationalizedArrayString).find(
                    item => item._key === "en"
                )?.value || "No title";
            return {
                title: englishTitle,
            };
        },
    },
});
