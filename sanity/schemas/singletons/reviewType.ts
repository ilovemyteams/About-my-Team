import { CommentIcon } from "@sanity/icons";
import { defineField } from "sanity";

interface TitleItem {
    _key: string;
    value: string;
}

export const reviewType = defineField({
    name: "review",
    title: "Reviews",
    type: "document",
    icon: CommentIcon,
    fields: [
        defineField({
            name: "projectName",
            type: "reference",
            to: [{ type: "project" }],
            validation: rule => rule.required(),
        }),
        defineField({
            name: "reviewAuthor",
            type: "reference",
            to: [{ type: "project" }],
            title: "Review author",
            options: {
                filter: "",
            },
            validation: rule => rule.required(),
        }),
        defineField({
            name: "reviewText",
            type: "internationalizedArrayText",
            title: "Review text",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "reviewUrl",
            title: "Review link (optional)",
            description: "Review link to an external resource",
            type: "linkExternal",
        }),
    ],
    preview: {
        select: {
            title: "project.title",
        },
        prepare({ title }) {
            if (!title) {
                return {
                    title: "No title",
                };
            }
            const englishTitle =
                (title as TitleItem[]).find(
                    (item: TitleItem) => item._key === "en"
                )?.value || "No title";
            return {
                title: englishTitle,
            };
        },
    },
});
