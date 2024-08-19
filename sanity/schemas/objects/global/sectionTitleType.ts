import { defineField, defineType, defineArrayMember } from "sanity";
import { maxLengthValidator } from "../../../utils/maxLengthValidator";
import { AccentText } from "@/sanity/components/accentText/AccentText";

const MAX_LENGHT = 100;

const createTitleField = (name: string, title: string, maxLength: number) =>
    defineField({
        name,
        type: "array",
        of: [
            defineArrayMember({
                lists: [
                    { title: "Bullet", value: "bullet" },
                    { title: "Numbered", value: "number" },
                ],
                marks: {
                    decorators: [
                        {
                            title: "Purple",
                            value: "purple",
                            icon: () => "🟣",
                            component: AccentText,
                        },
                    ],
                },
                type: "block",
            }),
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
