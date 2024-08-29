import { defineField } from "sanity";

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
            validation: rule => rule.required(),
        }),
        defineField({
            name: "position",
            type: "internationalizedArrayString",
            title: "Client position",
            validation: rule => rule.required(),
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
