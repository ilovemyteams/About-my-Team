import { CheckmarkIcon } from "@sanity/icons";
import { defineArrayMember, defineField } from "sanity";

import { getEnglishTitleFromIntArrays } from "@/sanity/utils/getEnglishTitleFromIntArrays";

export const aboutUsItemType = defineField({
    name: "aboutUsItem",
    title: "About us Item",
    type: "object",
    fields: [
        defineField({
            name: "aboutUs",
            description: "About us item information",
            type: "internationalizedArrayString",
            title: "About us Item",
        }),
    ],
    preview: {
        select: {
            title: "aboutUs",
        },

        prepare({ title }) {
            const englishTitle = getEnglishTitleFromIntArrays(title);
            return {
                icon: CheckmarkIcon,
                title: englishTitle,
            };
        },
    },
});

export const aboutUsHomeSectionType = defineField({
    name: "aboutUsHomeSection",
    title: "About us Section",
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
            name: "sectionTitle",
            type: "internationalizedArrayPortableColorTitle",
            title: "Title of the section. Please, choose proper color of the text for each language.",
        }),
        defineField({
            name: "aboutUsItemInfo",
            type: "array",
            of: [defineArrayMember({ type: "aboutUsItem" })],
        }),
        defineField({
            name: "learnMoreButton",
            type: "button",
            title: "Learn More Button",
        }),
    ],
});
