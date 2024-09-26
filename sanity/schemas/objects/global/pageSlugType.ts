import { defineType } from "sanity";

import { InternationalizedArrayString } from "@/types/sanity.types";

export const pageSlugType = defineType({
    title: "Page Slug",
    name: "pageSlug",
    type: "object",
    options: { collapsible: true, collapsed: true },
    fields: [
        {
            title: "Page Slug",
            name: "anchorId",
            type: "slug",
            options: {
                source: (_, options) => {
                    const parent = options.parent as {
                        subtitle?: InternationalizedArrayString;
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
                Rule.custom((value, context) => {
                    const parent = context.parent as {
                        subtitle?: InternationalizedArrayString;
                    };

                    const currentValue = (value as { current?: string })
                        ?.current;

                    if (parent?.subtitle) {
                        const enSubtitle =
                            parent.subtitle.find(item => item._key === "en")
                                ?.value || "";

                        const expectedSlug = enSubtitle
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .slice(0, 50);

                        if (currentValue !== expectedSlug) {
                            return "The Anchor Id must match the English subtitle. Regenerate Anchor Id.";
                        }
                    }

                    if (!value) {
                        return "The Anchor Id is required.";
                    }

                    return true;
                }).required(),
        },
    ],

    preview: {
        select: {
            title: "anchorId.current",
        },
        prepare: ({ title }) => ({
            title: title || "No Anchor Id",
        }),
    },
});
