import { defineField } from "sanity";
import { FcLikePlaceholder } from "react-icons/fc";

import { SOCIAL_LINKS } from "@/sanity/constants";

export const socialLinksType = defineField({
    name: "socialLinks",
    type: "object",
    icon: FcLikePlaceholder,
    fields: [
        defineField({
            name: "platform",
            type: "string",
            title: "Platform",
            options: {
                list: SOCIAL_LINKS,
            },
        }),
        defineField({
            name: "url",
            type: "linkExternal",
            title: "URL",
        }),
    ],
});
