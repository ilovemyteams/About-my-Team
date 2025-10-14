import { FcFeedback } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { defineField } from "sanity";

import { getEnglishTitleFromIntArrays } from "@/sanity/utils/getEnglishTitleFromIntArrays";
import { validateIsRequired } from "@/sanity/utils/validateIsRequired";

export const reviewType = defineField({
    name: "review",
    title: "Reviews",
    type: "document",
    icon: FcFeedback,
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
            name: "reviewer",
            title: "Reviewer",
            type: "array",
            description:
                "Select a project customer from the list as a reviewer or enter reviewer information manually",
            of: [
                {
                    type: "reference",
                    to: [{ type: "customer" }],
                    title: "Select project customer",
                },
                {
                    type: "object",
                    title: "Add reviewer manually",
                    icon: FcBusinessman,
                    fields: [
                        {
                            name: "name",
                            type: "internationalizedArrayString",
                            title: "Reviewer name",
                            validation: rule => rule.custom(validateIsRequired),
                        },
                        {
                            name: "position",
                            type: "internationalizedArrayString",
                            title: "Reviewer position",
                            validation: rule => rule.custom(validateIsRequired),
                        },
                    ],
                    preview: {
                        select: {
                            title: "name",
                            subtitle: "position",
                        },
                        prepare({ title, subtitle }) {
                            const englishName =
                                getEnglishTitleFromIntArrays(title);
                            const englishPosition =
                                getEnglishTitleFromIntArrays(subtitle);
                            return {
                                title: englishName,
                                subtitle: englishPosition,
                            };
                        },
                    },
                },
            ],
            validation: rule => [
                rule.required().error("Reviewer is required"),
                rule.max(1).error("Please specify only one reviewer"),
            ],
        }),
        defineField({
            name: "image",
            title: "Review image",
            type: "object",
            fields: [
                {
                    name: "image",
                    title: "Image",
                    description: "Specify image to show in review",
                    type: "image",
                    validation: rule => rule.required(),
                },
                {
                    name: "caption",
                    type: "internationalizedArrayString",
                    title: "Caption",
                    description:
                        "A brief description of what is shown in the picture",
                    validation: rule => rule.custom(validateIsRequired),
                },
            ],
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
            media: "image.image",
            reviewerManualName: "reviewer.0.name",
            reviewerRefName: "reviewer.0.name",
            reviewerManualPosition: "reviewer.0.position",
            reviewerRefPosition: "reviewer.0.position",
        },
        prepare({
            title,
            media,
            reviewerManualName,
            reviewerRefName,
            reviewerManualPosition,
            reviewerRefPosition,
        }) {
            const englishTitle = getEnglishTitleFromIntArrays(title);

            const reviewerName = getEnglishTitleFromIntArrays(
                reviewerManualName ? reviewerManualName : reviewerRefName,
                "No name"
            );

            const reviewerPosition = getEnglishTitleFromIntArrays(
                reviewerManualPosition
                    ? reviewerManualPosition
                    : reviewerRefPosition,
                "no position"
            );

            return {
                title: `Review "${englishTitle}"`,
                subtitle: `${reviewerName}, ${reviewerPosition}`,
                media: media || undefined,
            };
        },
    },
});
