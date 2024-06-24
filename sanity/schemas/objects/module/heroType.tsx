import { defineField } from "sanity";

export const heroType = defineField({
    name: "hero",
    title: "Hero",
    type: "object",
    fields: [
        defineField({
            name: "title",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "description",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "link",
            type: "array",
            of: [{ type: "linkInternal" }, { type: "linkExternal" }],
            validation: Rule => Rule.max(1),
        }),
    ],
});
