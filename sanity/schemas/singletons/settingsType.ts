import { FcSettings } from "react-icons/fc";
import { defineField, defineType } from "sanity";

import { GROUPS } from "@/sanity/constants";

const TITLE = "Settings";

export const settingsType = defineType({
    name: "settings",
    title: TITLE,
    type: "document",
    icon: FcSettings,
    options: {
        collapsed: false,
        collapsible: true,
    },
    groups: GROUPS,
    fields: [
        defineField({
            // should match 'languageField' plugin configuration setting, if customized
            name: "language",
            type: "string",
            readOnly: true,
            hidden: true,
        }),
        defineField({
            name: "header",
            type: "header",
            group: "navigation",
        }),
        defineField({
            name: "footer",
            type: "footer",
            group: "navigation",
        }),

        // Not found page
        defineField({
            name: "notFoundPage",
            title: "Page 404",
            type: "notFoundPage",
            group: "notFoundPage",
        }),
        // SEO
        defineField({
            name: "seo",
            title: "SEO",
            type: "seo",
            group: "seo",
        }),
        defineField({
            name: "buttonBuyMeCoffee",
            title: "Button Buy me a coffee",
            type: "button",
            group: "buttons",
            options: {
                collapsed: false,
                collapsible: true,
            },
        }),
        defineField({
            name: "buttonJoinUS",
            title: "Button Join Us",
            type: "button",
            group: "buttons",
            options: {
                collapsed: false,
                collapsible: true,
            },
        }),
        defineField({
            name: "buttonOrder",
            title: "Button Order",
            type: "button",
            group: "buttons",
            options: {
                collapsed: false,
                collapsible: true,
            },
        }),
    ],
    preview: {
        prepare() {
            return {
                title: TITLE,
            };
        },
    },
});
