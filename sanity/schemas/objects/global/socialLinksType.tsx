import { defineField } from "sanity";

export const socialLinksType = defineField({
    name: "socialLinks",
    title: "Social Links",
    type: "object",
    fields: [
        defineField({
            name: "platform",
            type: "string",
        }),
        defineField({
            name: "url",
            type: "url",
        }),
    ],
});
