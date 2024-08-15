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
            title: "Our Missions Section Title",
        }),
        defineField({
            name: "shortDescription",
            type: "array",
            of: [defineArrayMember({ type: "missionItemDescription" })],
        }),
        defineField({
            name: "internalLinks",
            type: "array",
            of: [defineArrayMember({ type: "subSectionLink" })],
        }),
    ],
});
