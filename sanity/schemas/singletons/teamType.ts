import { UsersIcon } from "@sanity/icons";
import { defineArrayMember, defineField } from "sanity";

import { ROLES } from "@/sanity/constants";

interface NameItem {
    _key: string;
    value: string;
}
export const teamType = defineField({
    name: "team",
    title: "Team member's card",
    type: "document",
    icon: UsersIcon,
    fields: [
        defineField({
            name: "name",
            description: "Team member's name",
            type: "internationalizedArrayString",
            title: "Name",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "role",
            description: "Team member's role",
            type: "string",
            title: "Role",
            options: { list: ROLES },
            validation: rule => rule.required(),
        }),
        defineField({
            name: "price",
            description: "(usd per hour)",
            type: "number",
            title: "Price per hour",
        }),
        defineField({
            name: "isAvaliblePerson",
            description: "Would you like to show the price on the website?",
            type: "string",
            initialValue: "Show price",
            options: {
                list: ["Show price", "Do not show price"],
                layout: "radio",
            },
        }),

        defineField({
            name: "about",
            description: "Team member's short description",
            type: "internationalizedArrayText",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "services",
            description: "Team member's full description/services",
            type: "internationalizedArrayText",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "projects",
            title: "Projects",
            type: "array",
            of: [{ type: "reference", to: [{ type: "project" }] }],
        }),
        defineField({
            name: "photo",
            type: "image",
        }),
        defineField({
            name: "socialLinks",
            type: "array",
            of: [defineArrayMember({ type: "socialLinks" })],
        }),
        defineField({
            name: "tools",
            type: "array",
            of: [defineArrayMember({ type: "string" })],
        }),
    ],
    preview: {
        select: {
            name: "name",
            subtitle: "role",
            media: "photo",
        },
        prepare({ name = [], subtitle, media }) {
            const englishName =
                (name as NameItem[]).find(
                    (item: NameItem) => item._key === "en"
                )?.value || "No name";

            return {
                title: `${englishName || "No name"}`,
                subtitle: subtitle || "No role",
                media: media || undefined,
            };
        },
    },
});
