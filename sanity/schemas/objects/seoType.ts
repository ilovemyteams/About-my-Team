import { defineField } from "sanity";

import { validateMaxLength } from "@/sanity/utils/validateMaxLength";

const TITLE_MAX_LENGTH = 60;
const DESCRIPTION_MAX_LENGTH = 300;

export const seoType = defineField({
    name: "seo",
    title: "SEO",
    type: "object",
    group: "seo",
    options: {
        collapsed: false,
        collapsible: true,
    },
    fields: [
        defineField({
            name: "title",
            type: "internationalizedArrayString",
            validation: rule =>
                rule.custom(validateMaxLength(TITLE_MAX_LENGTH)),
        }),
        defineField({
            name: "description",
            type: "internationalizedArrayString",
            validation: rule =>
                rule.custom(validateMaxLength(DESCRIPTION_MAX_LENGTH)),
        }),
        defineField({
            name: "image",
            type: "image",
        }),
    ],
});
