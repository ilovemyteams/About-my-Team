import { defineArrayMember, defineField } from "sanity";

export const stagesHomeType = defineField({
    name: "stagesHome",
    title: "Stages",
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
            title: "Stages title",
            description:
                "Сhoose the accent color of specific words for each language",
            type: "internationalizedArrayPortableColorTitle",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "stagesList",
            title: "Stages list",
            description:
                "Choose the services that should be displayed in the stages section",
            type: "array",
            of: [defineArrayMember({ type: "stage" })],
            validation: Rule => Rule.required().min(7).max(7),
        }),
    ],
});
