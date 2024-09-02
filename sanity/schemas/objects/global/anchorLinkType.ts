import { defineType } from "sanity";

interface TitleItem {
    _key: string;
    value: string;
}

export const anchorLinkType = defineType({
    title: "Anchor Link",
    name: "anchorLink",
    type: "object",
    options: { collapsible: true, collapsed: true },
    fields: [
        {
            title: "Subtitle",
            name: "subtitle",
            type: "internationalizedArrayString",
            description: "Enter a small section subtitle",
            validation: Rule => Rule.required(),
        },
        {
            title: "Anchor Id",
            name: "anchorId",
            type: "slug",
            options: {
                source: (_, options) => {
                    const parent = options.parent as {
                        subtitle?: TitleItem[];
                    };

                    if (parent?.subtitle) {
                        const enSubtitle = parent.subtitle.find(
                            item => item._key === "en"
                        )?.value;
                        return enSubtitle;
                    }
                },
                maxLength: 50,
                slugify: input =>
                    input.toLowerCase().replace(/\s+/g, "-").slice(0, 50),
            },
            validation: Rule =>
                Rule.custom(value => {
                    // Якщо slug пустий, видаємо помилку
                    if (!value) {
                        return 'Enter the "subtitle" field in English, this field is required to generate an Anchor Id';
                    }
                    return true;
                }).required(),
        },
    ],

    preview: {
        select: {
            title: "Anchor Id",
            anchorId: "anchorId",
        },

        prepare: ({ title, anchorId }) => ({
            title,
            subtitle: anchorId,
        }),
    },
});
