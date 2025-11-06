import { AiOutlineMenuFold } from "react-icons/ai";
import { LuPencilRuler } from "react-icons/lu";
import {
    TbBaselineDensityLarge,
    TbBaselineDensityMedium,
} from "react-icons/tb";
import { defineArrayMember, defineField } from "sanity";

import { BlockNormalText } from "../../components/portableTextView/BlockNormalText";
import { BlockSmallText } from "../../components/portableTextView/BlockSmallText";
import { BlockSubtitle } from "../../components/portableTextView/BlockSubtitle";
import { BlockSubtitleWithMark } from "../../components/portableTextView/BlockSubtitleWithMark";

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
                        title: "Курсив",
                        value: "em",
                    },
                    {
                        title: "Жирний",
                        value: "strong",
                    },
                    {
                        title: "Відступ зліва",
                        value: "marginLeft",
                        icon: AiOutlineMenuFold,
                    },

                    {
                        title: "Нижній відступ маленький",
                        value: "marginBottomSm",
                        icon: TbBaselineDensityMedium,
                    },
                    {
                        title: "Нижній відступ середній",
                        value: "marginBottomMd",
                        icon: TbBaselineDensityLarge,
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
                    title: "Маленький текст",
                    value: "small",
                    component: BlockSmallText,
                },
                {
                    title: "Звичаний текст",
                    value: "normal",
                    component: BlockNormalText,
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
