import { defineType, defineArrayMember } from "sanity";
import { maxLengthValidator } from "../../utils/maxLengthValidator";
import { AccentText } from "@/sanity/components/accentText/AccentText";

const MAX_LENGTH = 100;

export const portableColorTitleType = defineType({
    name: "portableColorTitle",
    type: "array",
    of: [
        defineArrayMember({
            type: "block",
            lists: [],
            marks: {
                decorators: [
                    {
                        title: "Purple",
                        value: "purple",
                        icon: () => "🟣",
                        component: AccentText,
                    },
                ],
                annotations: [],
            },
        }),
    ],
    validation: Rule => Rule.required().custom(maxLengthValidator(MAX_LENGTH)),
});
