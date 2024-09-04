import { UsersIcon } from "@sanity/icons";
import { defineArrayMember, defineField } from "sanity";

import { FieldItem } from "@/sanity/interfaces/interfaces";

export const teamType = defineField({
    name: "team",
    title: "Team members",
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
            title: "Role",
            type: "reference",
            to: { type: "specialist" },
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
            of: [
                { type: "linkExternal" },
                {
                    type: "reference",
                    to: [{ type: "project" }],
                },
            ],
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
            of: [{ type: "reference", to: [{ type: "tool" }] }],
            validation: rule => rule.required(),
        }),
    ],
    preview: {
        select: {
            name: "name",
            subtitle: "role.title",
            media: "photo",
        },
        prepare({ name = [], subtitle, media }) {
            const englishName =
                (name as FieldItem[]).find(
                    (item: FieldItem) => item._key === "en"
                )?.value || "No name";

            return {
                title: `${englishName || "No name"}`,
                subtitle: subtitle || "No role",
                media: media || undefined,
            };
        },
    },
});
