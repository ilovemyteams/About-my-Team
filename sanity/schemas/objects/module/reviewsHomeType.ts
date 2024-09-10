import { defineField } from "sanity";

export const reviewsHomeType = defineField({
    name: "reviewsHome",
    title: "Reviews",
    type: "object",
    options: {
        collapsed: false,
        collapsible: true,
    },
    fields: [
        defineField({
            name: "sectionId",
            type: "anchorLink",
            title: "Anchor Link",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "title",
            title: "Reviews title",
            description:
                "Сhoose the accent color of specific words for each language",
            type: "internationalizedArrayPortableColorTitle",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "reviewsSlider",
            title: "Reviews slider",
            description:
                "Choose the reviews that should be displayed in the slider",
            type: "array",
            of: [{ type: "reference", to: [{ type: "review" }] }],
            validation: Rule => Rule.required(),
        }),
    ],
});
