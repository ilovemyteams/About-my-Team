import { defineField } from "sanity";
import { PreviewItem } from "@/sanity/interfaces/interfaces";

export const subSectionLinkType = defineField({
    name: "subSectionLink",
    title: "Subsection Internal Link",
    description: "Link title for the section (uppercase view on the site)",
    type: "object",
    fields: [
        defineField({
            name: "linkName",
            title: "Link name",
            type: "internationalizedArrayString",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "linkInternal",
            type: "linkInternal",
        }),
    ],
    preview: {
        select: {
            title: "linkName",
        },
        prepare({ title = [] }) {
            const englisTitle =
                (title as PreviewItem[]).find(
                    (item: PreviewItem) => item._key === "en"
                )?.value || "No title";
            return {
                title: englisTitle,
            };
        },
    },
});
