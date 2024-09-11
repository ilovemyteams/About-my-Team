import { defineField } from "sanity";

export const notFoundPageType = defineField({
    name: "notFoundPage",
    title: "Page 404",
    type: "object",
    group: "notFoundPage",
    options: {
        collapsed: false,
        collapsible: true,
    },
    fields: [
        defineField({
            name: "title",
            title: "Page 404 Title",
            type: "internationalizedArrayString",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Page description (optional)",
            type: "internationalizedArrayText",
        }),
        defineField({
            name: "goToHomeButton",
            title: "Go to The Home Button",
            type: "button",
        }),
    ],
});
