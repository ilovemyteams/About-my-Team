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
                'Enter a unique value for the page if you want this slice to show up in the "Jump To" actions',
        },
        {
            title: "Title",
            name: "title",
            type: "string",
            description:
                "Optional: The slice title will be used if this is left blank",
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
