import { defineField } from "sanity";

import { validateIsRequired } from "@/sanity/utils/validateIsRequired";

interface TitleItem {
    _key: string;
    value: string;
}

export const customerType = defineField({
    name: "customer",
    type: "object",
    title: "customer",
    fields: [
        defineField({
            name: "name",
            type: "internationalizedArrayString",
            title: "Client name",
            validation: rule => rule.custom(validateIsRequired),
        }),
        defineField({
            name: "position",
            type: "internationalizedArrayString",
            title: "Client position",
            validation: rule => rule.custom(validateIsRequired),
        }),
        defineField({
            name: "photo",
            type: "image",
            title: "Client photo",
        }),
    ],
    preview: {
        select: {
            name: "name",
            media: "image",
        },
        prepare({ name, media }) {
            const englishName =
                (name as TitleItem[]).find(
                    (item: TitleItem) => item._key === "en"
                )?.value || "No name";
            return {
                title: `${englishName || "No name"}`,
                media: media || undefined,
            };
        },
    },
});
