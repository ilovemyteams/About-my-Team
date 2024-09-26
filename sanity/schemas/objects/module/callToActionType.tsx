import { BlockElementIcon } from "@sanity/icons";
import { defineField } from "sanity";
import { validateIsRequired } from "@/sanity/utils/validateIsRequired";
import { getEnglishTitleFromIntArrays } from "@/sanity/utils/getEnglishTitleFromIntArrays";

export const callToActionType = defineField({
    name: "callToAction",
    title: "Call to action",
    type: "object",
    icon: BlockElementIcon,
    options: {
        collapsed: false,
        collapsible: true,
    },
    fields: [
        defineField({
            name: "title",
            title: "Section title",
            type: "internationalizedArrayString",
            validation: rule => rule.custom(validateIsRequired),
        }),
        defineField({
            name: "description",
            title: "Section description (optional)",
            type: "internationalizedArrayPortableTextSimple",
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            const engLishTitle = getEnglishTitleFromIntArrays(title);
            return {
                title: engLishTitle,
                subtitle: "Call to action",
                media: BlockElementIcon,
            };
        },
    },
});
