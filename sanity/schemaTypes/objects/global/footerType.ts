import { defineField } from "sanity";

import { validateIsRequired } from "@/sanity/utils/validateIsRequired";

export const footerType = defineField({
    name: "footer",
    title: "Footer",
    type: "object",
    options: {
        collapsed: false,
        collapsible: true,
    },
    fields: [
        defineField({
            name: "title",
            title: "Footer title",
            description:
                "Сhoose the accent color of specific words for each language",
            type: "internationalizedArrayPortableColorTitle",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "navigationMenu",
            type: "array",
            title: "Footer Navigation Menu",
            of: [{ type: "menuItem" }],
            validation: rule => rule.required(),
        }),
        defineField({
            name: "privacyPolicy",
            type: "object",
            title: "Privacy Policy",
            fields: [
                defineField({
                    name: "title",
                    type: "internationalizedArrayString",
                    title: "Privacy Policy Title",
                    validation: rule => rule.custom(validateIsRequired),
                }),
                defineField({
                    name: "url",
                    type: "object",
                    title: "Privacy Policy URL",
                    fields: [
                        {
                            name: "ua",
                            type: "array",
                            title: "URL (Ukrainian)",
                            of: [
                                { type: "linkExternal" },
                                { type: "linkInternal" },
                            ],
                            validation: rule =>
                                rule
                                    .required()
                                    .max(1)
                                    .error(
                                        "You can only add one link (either external or internal) for Ukrainian."
                                    ),
                        },
                        {
                            name: "en",
                            type: "array",
                            title: "URL (English)",
                            of: [
                                { type: "linkExternal" },
                                { type: "linkInternal" },
                            ],
                            validation: rule =>
                                rule
                                    .required()
                                    .max(1)
                                    .error(
                                        "You can only add one link (either external or internal) for English."
                                    ),
                        },
                        {
                            name: "pl",
                            type: "array",
                            title: "URL (Polish)",
                            of: [
                                { type: "linkExternal" },
                                { type: "linkInternal" },
                            ],
                            validation: rule =>
                                rule
                                    .required()
                                    .max(1)
                                    .error(
                                        "You can only add one link (either external or internal) for Polish."
                                    ),
                        },
                    ],
                }),
            ],
            validation: rule => rule.required(),
        }),
        defineField({
            name: "rightsReserved",
            type: "internationalizedArrayString",
            title: "All rights reserved text",
            validation: rule => rule.custom(validateIsRequired),
        }),
    ],
});
