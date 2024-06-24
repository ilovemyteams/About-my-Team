import {
    CogIcon,
    ControlsIcon,
    ErrorOutlineIcon,
    MenuIcon,
    SearchIcon,
} from "@sanity/icons";
import { defineType, defineField } from "sanity";

const TITLE = "Settings";

export const settingsType = defineType({
    name: "settings",
    title: TITLE,
    type: "document",
    icon: CogIcon,
    groups: [
        {
            default: true,
            name: "navigation",
            title: "Navigation",
            icon: MenuIcon,
        },
        {
            name: "productOptions",
            title: "Product options",
            icon: ControlsIcon,
        },
        {
            name: "notFoundPage",
            title: "404 page",
            icon: ErrorOutlineIcon,
        },
        {
            name: "seo",
            title: "SEO",
            icon: SearchIcon,
        },
    ],
    fields: [
        defineField({
            // should match 'languageField' plugin configuration setting, if customized
            name: "language",
            type: "string",
            readOnly: true,
            hidden: true,
        }),
        defineField({
            name: "menu",
            type: "menu",
            group: "navigation",
        }),
        defineField({
            name: "footer",
            type: "footerSettings",
            group: "navigation",
        }),

        // Not found page
        defineField({
            name: "notFoundPage",
            title: "404 page",
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
    ],
    preview: {
        prepare() {
            return {
                title: TITLE,
            };
        },
    },
});
