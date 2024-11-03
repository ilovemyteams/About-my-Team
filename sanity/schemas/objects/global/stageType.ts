import { FcPositiveDynamic } from "react-icons/fc";
import { defineField } from "sanity";

import { getEnglishTitleFromIntArrays } from "@/sanity/utils/getEnglishTitleFromIntArrays";
import { validateIsRequired } from "@/sanity/utils/validateIsRequired";

export const stageType = defineField({
    name: "stage",
    title: "Stages",
    type: "object",
    icon: FcPositiveDynamic,
    fields: [
        defineField({
            name: "title",
            type: "internationalizedArrayString",
            title: "Stage title",
            validation: rule => rule.custom(validateIsRequired),
        }),
        defineField({
            name: "description",
            type: "internationalizedArrayText",
            title: "Stage description",
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
