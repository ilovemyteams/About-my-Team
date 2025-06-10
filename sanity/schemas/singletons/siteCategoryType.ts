import { FcMultipleSmartphones } from "react-icons/fc";
import { defineField } from "sanity";

import { getEnglishTitleFromIntArrays } from "@/sanity/utils/getEnglishTitleFromIntArrays";

export const siteCategoryType = defineField({
    name: "siteCategory",
    title: "Site categories",
    type: "document",
    icon: FcMultipleSmartphones,
    fields: [
        defineField({
            name: "categoryName",
            title: "Category Name",
            type: "internationalizedArrayString",
        }),
    ],
    preview: {
        select: {
            title: "categoryName",
        },
        prepare({ title }) {
            const englishTitle = getEnglishTitleFromIntArrays(title);
            return {
                title: englishTitle,
            };
        },
    },
});
