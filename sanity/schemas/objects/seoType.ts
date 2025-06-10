import { defineField } from "sanity";

import { validateMaxLength } from "@/sanity/utils/validateMaxLength";

const TITLE_MAX_LENGTH = 100;
const DESCRIPTION_MAX_LENGTH = 200;

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
            description: "Optimal title length is 50-60 symbols",
            type: "internationalizedArrayString",
            validation: rule =>
                rule.custom(validateMaxLength(TITLE_MAX_LENGTH)),
        }),
        defineField({
            name: "description",
            description: "Optimal description length is 160 symbols",
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
