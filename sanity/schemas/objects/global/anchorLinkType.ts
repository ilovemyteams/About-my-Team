import { defineType } from "sanity";

export const anchorLinkType = defineType({
    title: "Anchor Link",
    name: "anchorLink",
    type: "object",
    options: { collapsible: true, collapsed: true },
    fields: [
        {
            title: "Anchor Id",
            name: "anchorId",
            type: "string",
            description:
                'Enter a unique value for the section if you want this slice to show up in the "Jump To" menu',
            validation: Rule => Rule.required(),
        },
        {
            title: "Subtitle",
            name: "subtitle",
            type: "internationalizedArrayString",
            description: "Enter a small section subtitle",
            validation: Rule => Rule.required(),
        },
    ],

    preview: {
        select: {
            title: "Anchor Id",
            anchorId: "anchorId",
        },

        prepare: ({ title, anchorId }) => ({
            title,
            subtitle: anchorId,
        }),
    },
});
