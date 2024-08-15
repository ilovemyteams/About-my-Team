import { BlockElementIcon } from "@sanity/icons";
import { defineField } from "sanity";

export const callToActionType = defineField({
    name: "callToAction",
    title: "Call to action",
    type: "object",
    icon: BlockElementIcon,

    fields: [
        defineField({
            name: "title",
            title: "Section title",
            type: "internationalizedArrayString",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "ctaButton",
            title: "CTA Button",
            type: "ctaButton",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Section description (optional)",
            type: "internationalizedArrayPortableTextSimple",
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            return {
                subtitle: "Call to action",
                title,
                media: BlockElementIcon,
            };
        },
    },
});
