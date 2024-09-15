import { ActivityIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { InternationalizedArrayString } from "@/types/sanity.types";

export const stageType = defineField({
    name: "stage",
    title: "Stages",
    type: "object",
    icon: ActivityIcon,
    fields: [
        defineField({
            name: "title",
            type: "internationalizedArrayString",
            title: "Stage title",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "description",
            type: "internationalizedArrayText",
            title: "Stage description",
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
