import { defineType, defineArrayMember } from "sanity";
import { maxLengthValidator } from "../../utils/maxLengthValidator";
import { AccentText } from "@/sanity/components/accentText/AccentText";

const MAX_LENGHT = 100;

export const portableTextColorType = defineType({
    name: "portableTextColor",
    type: "array",
    of: [
        defineArrayMember({
            type: "block",
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
        }),
    ],
    validation: Rule => Rule.required().custom(maxLengthValidator(MAX_LENGHT)),
});
