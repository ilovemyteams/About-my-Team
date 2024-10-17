import { HelpCircleIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { FAQ_PAGE_DESIGN_TYPES } from "@/sanity/constants";
import { getEnglishTitleFromIntArrays } from "@/sanity/utils/getEnglishTitleFromIntArrays";
import { validateIsRequired } from "@/sanity/utils/validateIsRequired";

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
            name: "image",
            title: "Question image",
            type: "object",
            fields: [
                {
                    name: "image",
                    title: "Image",
                    description:
                        "Question image to show in the all questions page",
                    type: "image",
                    validation: rule => rule.required(),
                },
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
        defineField({
            name: "fullAnswer",
            type: "object",
            title: "Full version of the answer (optional)",
            description:
                "Provide a full answer option for a single question page",
            fields: [
                {
                    name: "topText",
                    title: "Top text",
                    description:
                        "The beginning of the full answer, which is displayed at the top of the page",
                    type: "internationalizedArrayText",
                    validation: rule => rule.custom(validateIsRequired),
                },
                {
                    name: "mainContent",
                    type: "object",
                    title: "Main Content",
                    description: "The middle part of the full answer",
                    fields: [
                        {
                            name: "designType",
                            type: "string",

                            initialValue: "stages",
                            title: "Design Type",
                            options: {
                                list: FAQ_PAGE_DESIGN_TYPES,
                            },
                            description:
                                "Select the design type you want for the middle part of the answer",
                            validation: rule => rule.required(),
                        },
                        {
                            name: "mainContentText",
                            type: "internationalizedArrayPortableText",
                            title: "Main Content Text",
                            description:
                                "Place the middle part of the answer here and select the desired styles",
                            validation: rule => rule.custom(validateIsRequired),
                        },
                    ],
                    validation: rule => rule.required(),
                },
                {
                    name: "orderContent",
                    type: "object",
                    title: "Order Section Content",
                    description: "The last part of the full answer",
                    fields: [
                        {
                            name: "image",
                            title: "Image",
                            description:
                                "Image to show in the order section of the full answer page",
                            type: "image",
                            validation: rule => rule.required(),
                        },
                        {
                            name: "orderText",
                            title: "Text",
                            description:
                                "Text to show in the order section of the full answer page",
                            type: "internationalizedArrayText",
                            validation: rule => rule.custom(validateIsRequired),
                        },
                    ],
                    validation: rule => rule.required(),
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: "question",
            media: "image",
        },
        prepare({ title, media }) {
            const englishTitle = getEnglishTitleFromIntArrays(title);
            return {
                title: englishTitle,
                media: media || undefined,
            };
        },
    },
});
