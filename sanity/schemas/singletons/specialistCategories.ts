import { CaseIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { getEnglishTitleFromIntArrays } from "@/sanity/utils/getEnglishTitleFromIntArrays";
import { validateIsRequired } from "@/sanity/utils/validateIsRequired";

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
