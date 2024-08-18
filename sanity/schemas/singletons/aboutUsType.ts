import { UserIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { GROUPS } from "../../constants";

const TITLE = "About Us";

export const aboutUsType = defineField({
    name: "aboutUs",
    title: TITLE,
    type: "document",
    icon: UserIcon,
    groups: GROUPS,
    fields: [
        defineField({
            // should match 'languageField' plugin configuration setting, if customized
            name: "language",
            type: "string",
            readOnly: true,
            hidden: true,
        }),
    ],
    preview: {
        prepare() {
            return {
                media: UserIcon,
                subtitle: "Index",
                title: TITLE,
            };
        },
    },
});
