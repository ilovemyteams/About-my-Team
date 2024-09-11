import { defineField } from "sanity";

export const headerType = defineField({
    name: "header",
    title: "Header",
    type: "object",
    options: {
        collapsed: false,
        collapsible: true,
    },
    fields: [
        defineField({
            name: "navigationMenu",
            type: "array",
            title: "Header Navigation Menu",
            of: [{ type: "menuItem" }],
        }),
        defineField({
            name: "socialLinks",
            type: "array",
            title: "Header Social Links",
            of: [{ type: "socialLinks" }],
        }),
    ],
});
