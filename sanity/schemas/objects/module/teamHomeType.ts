import { defineField } from "sanity";

export const teamHomeType = defineField({
    name: "teamHome",
    title: "Team",
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
            title: "Team title",
            description:
                "Сhoose the accent color of specific words for each language",
            type: "internationalizedArrayPortableColorTitle",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "projectsList",
            title: "Projects list",
            description:
                "Select the projects from the list to be displayed in the Team section",
            type: "array",
            of: [{ type: "reference", to: [{ type: "project" }] }],
            validation: Rule => Rule.required(),
        }),
    ],
});
