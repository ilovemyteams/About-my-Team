import { HelpCircleIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { validateIsRequired } from "@/sanity/utils/validateIsRequired";
import { InternationalizedArrayString } from "@/types/sanity.types";

export const faqType = defineField({
    name: "faq",
    title: "FAQs",
    type: "document",
    icon: HelpCircleIcon,
    fields: [
        defineField({
            name: "numberOfLikes",
            type: "number",
            title: "Number of likes",
            description:
                "The number of likes is a read-only field and will be updated by customers through the webpage.",
            readOnly: true,
        }),
        defineField({
            name: "question",
            type: "internationalizedArrayString",
            title: "Question",
            validation: rule => rule.custom(validateIsRequired),
        }),
        defineField({
            name: "shortAnswer",
            type: "internationalizedArrayText",
            title: "Short version of the answer",
            description:
                "Provide a short answer option for the all questions page",
            validation: rule => rule.custom(validateIsRequired),
        }),
        defineField({
            name: "fullAnswer",
            type: "internationalizedArrayPortableText",
            title: "Full version of the answer",
            description:
                "Provide a full answer option for a single question page",
            validation: rule => rule.custom(validateIsRequired),
        }),
        defineField({
            name: "image",
            title: "Question image",
            description: "Question image to show in the all questions page",
            type: "image",
            fields: [
                {
                    name: "caption",
                    type: "internationalizedArrayString",
                    title: "Caption",
                    description:
                        "A brief description of what is shown in the picture",
                    validation: rule => rule.custom(validateIsRequired),
                },
            ],
            validation: rule => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "question",
            media: "image",
        },
        prepare({ title, media }) {
            if (!title) {
                return {
                    title: "No question title",
                };
            }
            const englishTitle =
                (title as InternationalizedArrayString).find(
                    item => item._key === "en"
                )?.value || "No question title";
            return {
                title: englishTitle,
                media: media || undefined,
            };
        },
    },
});
