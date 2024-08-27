import { defineField, defineArrayMember } from "sanity";
import { CheckmarkIcon } from "@sanity/icons";
import { PreviewItem } from "@/sanity/interfaces/interfaces";

export const aboutUsItemType = defineField({
    name: "aboutUsItem",
    title: "About us Item",
    type: "object",
    fields: [
        defineField({
            name: "AboutUs",
            description: "About us short description",
            type: "internationalizedArrayString",
            title: "About us Item",
        }),
    ],
    preview: {
        select: {
            title: "About us",
        },
        prepare({ title = [] }) {
            const englishTitle =
                (title as PreviewItem[]).find(
                    (item: PreviewItem) => item._key === "en"
                )?.value || "No title";
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
            title: "Title of the section. Please, please choose proper color of the text for each language.",
        }),
        defineField({
            name: "shortDescription",
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
