import { defineField, defineArrayMember } from "sanity";

export const missioItemType = defineField({
    name: "missionItemDescription",
    title: "Mission Item",
    type: "object",
    fields: [
        defineField({
            name: "Mission",
            description: "Mission short description",
            type: "internationalizedArrayString",
            title: "Mission item",
        }),
    ],
});

export const ourMissionHomeType = defineField({
    name: "ourMissionHome",
    title: "Our Missions Section",
    type: "object",
    fields: [
        defineField({
            name: "sectionTitleType",
            type: "sectionTitleType",
            title: "Title of the section. Please, please choose proper color of the text for each language.",
        }),
        defineField({
            name: "shortDescription",
            type: "array",
            of: [defineArrayMember({ type: "missionItemDescription" })],
        }),
        defineField({
            name: "learnMoreButton",
            type: "button",
            title: "Learn More Button",
        }),
        defineField({
            name: "internalLinks",
            type: "array",
            of: [defineArrayMember({ type: "subSectionLink" })],
        }),
    ],
});
