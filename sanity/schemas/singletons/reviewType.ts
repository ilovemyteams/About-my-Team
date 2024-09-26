import { CommentIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { validateIsRequired } from "@/sanity/utils/validateIsRequired";
import { InternationalizedArrayString } from "@/types/sanity.types";

export const reviewType = defineField({
    name: "review",
    title: "Reviews",
    type: "document",
    icon: CommentIcon,
    fields: [
        defineField({
            name: "project",
            type: "reference",
            to: [{ type: "project" }],
            title: "Project name",
            description: "Select the project for which the review was written",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "reviewText",
            type: "internationalizedArrayText",
            title: "Review text",
            validation: rule => rule.custom(validateIsRequired),
        }),
        defineField({
            name: "reviewUrl",
            type: "linkExternal",
            title: "Review link (optional)",
            description: "Review link to an external resource",
        }),
    ],
    preview: {
        select: {
            title: "project.title",
        },
        prepare({ title }) {
            if (!title) {
                return {
                    title: "No review title",
                };
            }
            const englishTitle =
                `Review "${
                    (title as InternationalizedArrayString).find(
                        item => item._key === "en"
                    )?.value
                }"` || "No review title";
            return {
                title: englishTitle,
            };
        },
    },
});
