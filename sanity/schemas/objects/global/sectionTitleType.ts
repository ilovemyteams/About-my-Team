import { defineField, defineType } from "sanity";
import { maxLengthValidator } from "../../../utils/maxLengthValidator";

const MAX_LENGHT = 30;

const colorAnnotation = defineField({
    name: "color",
    title: "Color",
    type: "object",
    fields: [
        defineField({
            name: "colorValue",
            title: "Color Value",
            type: "color",
        }),
    ],
});

const createTitleField = (name: string, title: string, maxLength: number) =>
    defineField({
        name,
        type: "array",
        title,
        of: [
            {
                type: "block",
                marks: {
                    annotations: [colorAnnotation],
                },
            },
        ],
        validation: Rule =>
            Rule.required().custom(maxLengthValidator(maxLength)),
    });

export const sectionTitleType = defineType({
    name: "sectionTitleType",
    type: "object",
    fields: [
        createTitleField("Title_EN", "Title EN", MAX_LENGHT),
        createTitleField("Title_UA", "Title UA", MAX_LENGHT),
        createTitleField("Title_PL", "Title PL", MAX_LENGHT),
    ],
});
