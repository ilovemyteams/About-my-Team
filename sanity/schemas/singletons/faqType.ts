import { FcFaq } from "react-icons/fc";
import { defineField } from "sanity";

import { FAQ_PAGE_DESIGN_TYPES } from "@/sanity/constants";
import { getEnglishTitleFromIntArrays } from "@/sanity/utils/getEnglishTitleFromIntArrays";
import { validateIsRequired } from "@/sanity/utils/validateIsRequired";

export const faqType = defineField({
    name: "faq",
    title: "FAQs",
    type: "document",
    icon: FcFaq,
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
                    type: "array",
                    title: "Main Content",
                    description:
                        "The middle part of the full answer. May include one or more blocks. Choose a design option and fill in the required data.",
                    of: [
                        {
                            name: "mainBlock",
                            title: "Main content block",
                            type: "object",
                            fields: [
                                {
                                    name: "designType",
                                    type: "string",
                                    title: "Design Type",
                                    initialValue: "numberedList",
                                    options: {
                                        list: FAQ_PAGE_DESIGN_TYPES,
                                    },
                                    description:
                                        "Select the design type you want for this content block",
                                    validation: rule => rule.required(),
                                },
                                {
                                    name: "mainContentTitle",
                                    type: "internationalizedArrayString",
                                    title: "Main Content Title (optional)",
                                    description:
                                        "Specify only the title is needed",
                                },
                                {
                                    name: "mainContentText",
                                    type: "internationalizedArrayPortableText",
                                    title: "Main Content Text",
                                    description:
                                        "Place the content here and select the desired styles",
                                    validation: rule =>
                                        rule.custom(validateIsRequired),
                                },
                            ],
                            preview: {
                                select: {
                                    title: "designType",
                                },
                                prepare({ title }) {
                                    const designTitle =
                                        FAQ_PAGE_DESIGN_TYPES.find(
                                            type => type.value === title
                                        )?.title;
                                    return {
                                        title:
                                            designTitle ||
                                            "Unknown design type",
                                    };
                                },
                            },
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
                        {
                            name: "showButton",
                            type: "boolean",
                            title: "Show Order Button?",
                            description:
                                "Select whether to display a button in the order section",
                            options: {
                                layout: "radio",
                                list: [
                                    { title: "Yes", value: true },
                                    { title: "No", value: false },
                                ],
                            },
                            validation: rule => rule.required(),
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
            media: "image.image",
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
