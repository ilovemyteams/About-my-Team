import { ActivityIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { FieldItem } from "@/sanity/interfaces/interfaces";

export const stageType = defineField({
    name: "stage",
    title: "Stages",
    type: "document",
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
                (title as FieldItem[]).find(
                    (item: FieldItem) => item._key === "en"
                )?.value || "No title";
            return {
                title: englishTitle,
            };
        },
    },
});
