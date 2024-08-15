import { defineField } from "sanity";

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
});
