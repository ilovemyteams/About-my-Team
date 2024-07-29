import { defineArrayMember, defineField } from "sanity";

export const teamType = defineField({
    name: "team",
    title: "Team",
    type: "object",
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "role",
            type: "string",
        }),
        defineField({
            name: "bio",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "photo",
            type: "image",
        }),
        defineField({
            name: "socialLinks",
            type: "array",
            of: [defineArrayMember({ type: "socialLinks" })],
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "role",
            media: "photo",
        },
        prepare({ title, subtitle, media }) {
            return {
                title: title || "No name",
                subtitle: subtitle || "No role",
                media: media || undefined,
            };
        },
    },
});
