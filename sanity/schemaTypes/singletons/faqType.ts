import { toPlainText } from "next-sanity";
import { FcCheckmark, FcFaq } from "react-icons/fc";
import { defineArrayMember, defineField } from "sanity";

import { BlockTypePreview } from "@/sanity/components/blockTypePreview/BlockTypePreview";
import { PreviewWithImage } from "@/sanity/components/previewWithImage/PreviewWithImage";
import { FAQ_PAGE_DESIGN_TYPES, SLUG_MAX_LENGTH } from "@/sanity/constants";
import { generateSlug } from "@/sanity/utils/generateSlug";
import { validateIsRequired } from "@/sanity/utils/validateIsRequired";
import { validateSlug } from "@/sanity/utils/validateSlug";

import { getUkrainianTitleFromIntArrays } from "./../../utils/getEnglishTitleFromIntArrays";

export const faqType = defineField({
    name: "faq",
    title: "FAQs",
    type: "document",
    icon: FcFaq,
    fieldsets: [
        {
            name: "mainData",
            title: "Основні відомості",
            options: { collapsible: true },
        },
    ],
    fields: [
        defineField({
            name: "question",
            type: "internationalizedArrayString",
            options: { collapsible: true },
            fieldset: "mainData",
            title: "Впишіть повний текст питання",

            description:
                "Якщо потрібно перенести частину заголовку на іншу строку, поставте символ '\n'",
            validation: rule => rule.custom(validateIsRequired),
        }),
        defineField({
            title: "Генерація посилання на сторінку",
            name: "pageSlug",
            type: "slug",
            fieldset: "mainData",
            description:
                "Натисність кнопку Generate, щоб згенерувати посилання з тексту питання",

            options: {
                source: doc => generateSlug(doc, "question", SLUG_MAX_LENGTH),
                slugify: input => input,
            },
            validation: Rule =>
                Rule.required().custom(validateSlug(SLUG_MAX_LENGTH)),
        }),
        defineField({
            name: "shortAnswer",
            type: "internationalizedArrayText",
            title: "Коротка відповідь",
            fieldset: "mainData",
            description:
                "Коротка відповідь буде відображатись на сторінці з усіма питаннями (/faq) та на головній сторінці в секції питання/відповідь",
            validation: rule => rule.custom(validateIsRequired),
        }),
        defineField({
            name: "additionalTextShortAnswer",
            type: "internationalizedArrayText",
            title: "Додатковий текст до короткої відповіді",
            options: { collapsible: true },
            fieldset: "mainData",
            description:
                "Додаткові відомості до короткої відповіді, будуть розміщені в Hero секції",
            validation: rule => rule.custom(validateIsRequired),
        }),
        defineField({
            name: "image",
            type: "imageType",
            title: "Зображення до питання",
            validation: rule => rule.required(),
            fieldset: "mainData",
        }),

        defineField({
            name: "mainContent",
            type: "array",
            title: "Основний контент відповіді",
            description:
                "Заповність дані для повного опису відповіді на питання використовуючи зазнчені секції",
            of: [
                defineArrayMember({
                    name: "mainBlock",
                    title: "Main content block",
                    type: "object",
                    fields: [
                        defineField({
                            name: "layoutType",
                            title: "Визначте секцію для відображення контенту",
                            type: "string",
                            components: { input: BlockTypePreview },
                            options: {
                                list: FAQ_PAGE_DESIGN_TYPES,
                                layout: "radio",
                            },
                            validation: rule => rule.required(),
                            initialValue: FAQ_PAGE_DESIGN_TYPES[0].value,
                        }),

                        defineField({
                            name: "mainContentTitle",
                            type: "internationalizedArrayString",
                            title: "Основний заголовок до секції",
                            description: "Заповніть за необхідності",
                        }),
                        defineField({
                            name: "isTopTextNeeded",
                            type: "boolean",
                            title: "Додати верхній текст в секції",
                            initialValue: false,
                        }),
                        defineField({
                            name: "mainContentTopText",
                            type: "internationalizedArrayText",
                            title: "Додатковий текст перед основним переліком",
                            hidden: ({ parent }) => !parent?.isTopTextNeeded,
                        }),
                        defineField({
                            name: "mainContentText",
                            type: "array",
                            title: "Основний контент секції",
                            description:
                                "Внесіть основний текст, ділячи їх по блокам, як потрібно відобразити згідно схеми блоку",

                            of: [
                                {
                                    type: "object",
                                    name: "contentBlock",
                                    title: "Блок в секції",
                                    fields: [
                                        {
                                            type: "internationalizedArrayString",
                                            name: "contentBlockTitle",
                                            title: "Заголовок блоку",
                                            description:
                                                "Внесіть дані за необхідності",
                                        },
                                        {
                                            type: "internationalizedArrayPortableTextSimple",
                                            name: "contentBlockText",
                                            title: "Основний текст блоку",
                                            validation: rule =>
                                                rule.custom(validateIsRequired),
                                        },
                                    ],
                                    preview: {
                                        select: {
                                            title: "contentBlockTitle",
                                            subtitle:
                                                "contentBlockText[0].value",
                                        },
                                        prepare: ({ title, subtitle }) => {
                                            const uaTitle =
                                                getUkrainianTitleFromIntArrays(
                                                    title
                                                ) || "Без заголовку";
                                            const text = subtitle
                                                ? toPlainText(subtitle)
                                                : "Не внесен текст";

                                            return {
                                                title: uaTitle,
                                                subtitle: text,
                                                media: FcCheckmark,
                                            };
                                        },
                                    },
                                },
                            ],
                        }),
                        defineField({
                            name: "isBottomTextNeeded",
                            type: "boolean",
                            title: "Додати нижній текст в секції",
                            initialValue: false,
                        }),
                        defineField({
                            name: "mainContentBottomText",
                            type: "internationalizedArrayText",
                            title: "Додатковий текст після основного переліку",
                            description: "Заповніть за необхідності",
                            hidden: ({ parent }) => !parent?.isBottomTextNeeded,
                        }),
                    ],

                    preview: {
                        select: {
                            layoutType: "layoutType",
                            mainTitle: "mainContentTitle",
                        },

                        prepare({ layoutType, mainTitle }) {
                            const currentDesign = FAQ_PAGE_DESIGN_TYPES.find(
                                type => type.value === layoutType
                            );
                            const title = getUkrainianTitleFromIntArrays(
                                mainTitle,
                                "Без заголовку"
                            );

                            if (currentDesign) {
                                return {
                                    title: title,
                                    subtitle: currentDesign.description,
                                    media: PreviewWithImage(
                                        `/images/sanity/faqPreview/${currentDesign.value}.jpg`,
                                        `Представлення для дизайну ${currentDesign.description}`
                                    ),
                                };
                            }

                            return {
                                title: title,
                                subtitle: "Дизайн не визначений",
                                media: FcFaq,
                            };
                        },
                    },
                }),
            ],
            validation: rule => rule.required(),
        }),

        defineField({
            name: "orderContent",
            type: "object",
            title: "Секція з кнопкою Замовити",
            options: { collapsible: true },

            fields: [
                {
                    name: "image",
                    title: "Зображення",

                    type: "imageType",
                    validation: rule => rule.required(),
                },
                {
                    name: "orderText",
                    title: "Текст",

                    type: "internationalizedArrayText",
                    validation: rule => rule.custom(validateIsRequired),
                },
            ],
            validation: rule => rule.required(),
        }),
        defineField({
            name: "likes",
            type: "number",
            title: "Кількість лайків до питання",
            initialValue: 0,
            readOnly: true,
        }),
    ],
    preview: {
        select: {
            title: "question",
            media: "image.image",
        },
        prepare({ title, media }) {
            const previewTitle = getUkrainianTitleFromIntArrays(title);

            return {
                title: previewTitle,
                media: media || undefined,
            };
        },
    },
});
