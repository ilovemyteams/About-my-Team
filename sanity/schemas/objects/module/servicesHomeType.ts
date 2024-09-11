import { defineField } from "sanity";

export const servicesHomeType = defineField({
    name: "servicesHome",
    title: "Services",
    type: "object",
    fields: [
        defineField({
            name: "sectionId",
            type: "anchorLink",
            title: "Anchor Link",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "title",
            title: "Services title",
            description:
                "Сhoose the accent color of specific words for each language",
            type: "internationalizedArrayPortableColorTitle",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "servicesList",
            title: "Services list",
            description:
                "Choose the services that should be displayed in the services section",
            type: "array",
            of: [{ type: "reference", to: [{ type: "service" }] }],
            validation: Rule => Rule.required().min(6).max(6),
        }),
        defineField({
            name: "description",
            title: "Services description",
            type: "internationalizedArrayText",
            validation: Rule => Rule.required(),
        }),
    ],
});
