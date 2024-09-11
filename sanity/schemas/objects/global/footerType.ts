import { defineField } from "sanity";

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
                    validation: rule => rule.required(),
                }),
                defineField({
                    name: "url",
                    type: "array",
                    title: "Privacy Policy URL",
                    of: [{ type: "linkExternal" }, { type: "linkInternal" }],
                    validation: rule =>
                        rule
                            .required()
                            .max(1)
                            .error(
                                "You can only add one link (either external or internal)."
                            ),
                }),
            ],
            validation: rule => rule.required(),
        }),
    ],
});
