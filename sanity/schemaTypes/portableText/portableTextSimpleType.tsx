import { LuPencilRuler } from "react-icons/lu";
import { defineArrayMember, defineField } from "sanity";

import { BlockSubtitle } from "@/sanity/components/portableTextView/BlockSubtitle";
import { BlockSubtitleWithMark } from "@/sanity/components/portableTextView/BlockSubtitleWithMark";

export const portableTextSimpleType = defineField({
    name: "portableTextSimple",
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
                        title: "Italic",
                        value: "em",
                    },
                    {
                        title: "Strong",
                        value: "strong",
                    },
                ],
                annotations: [
                    {
                        name: "linkEmail",
                        type: "linkEmail",
                    },
                    {
                        name: "linkInternal",
                        type: "linkInternal",
                    },
                    {
                        name: "linkExternal",
                        type: "linkExternal",
                    },
                ],
            },
            styles: [
                {
                    title: "Текст",
                    value: "normal",
                },

                {
                    title: "Підзаголовок",
                    value: "subtitle",
                    component: BlockSubtitle,
                },
                {
                    title: "Підзаголовок з маркером",
                    icon: LuPencilRuler,
                    value: "markered",
                    component: BlockSubtitleWithMark,
                },
            ],

            type: "block",
        }),
    ],
});
