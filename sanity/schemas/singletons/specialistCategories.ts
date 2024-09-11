import { CaseIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { FieldItem } from "@/types/FieldItemProps";

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
                (title as FieldItem[]).find(
                    (item: FieldItem) => item._key === "en"
                )?.value || "No title";
            return {
                title: englishTitle,
            };
        },
    },
});
