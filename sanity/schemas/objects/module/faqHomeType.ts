import { defineField } from "sanity";

export const faqHomeType = defineField({
    name: "faqHome",
    title: "FAQ",
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
            title: "FAQ title",
            description:
                "Сhoose the accent color of specific words for each language",
            type: "internationalizedArrayPortableColorTitle",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "faqList",
            title: "List of questions and answers",
            description:
                "Select from the list the questions to be displayed in the section",
            type: "array",
            of: [{ type: "reference", to: [{ type: "faq" }] }],
            validation: Rule => Rule.required(),
        }),
    ],
});
