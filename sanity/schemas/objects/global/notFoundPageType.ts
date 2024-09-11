import { defineField } from "sanity";

export const notFoundPageType = defineField({
    name: "notFoundPage",
    title: "404 page",
    type: "object",
    group: "notFoundPage",
    options: {
        collapsed: false,
        collapsible: true,
    },
    fields: [
        defineField({
            name: "title",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "body",
            type: "text",
            rows: 2,
        }),
    ],
});
