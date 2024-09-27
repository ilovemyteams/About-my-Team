import { CommentIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { getEnglishTitleFromIntArrays } from "@/sanity/utils/getEnglishTitleFromIntArrays";
import { validateIsRequired } from "@/sanity/utils/validateIsRequired";

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
            const englishTitle = getEnglishTitleFromIntArrays(title);
            return {
                title: `Review "${englishTitle}"`,
            };
        },
    },
});
