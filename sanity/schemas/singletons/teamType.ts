import { defineArrayMember, defineField } from "sanity";
import { UsersIcon } from "@sanity/icons";
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
        }),
        defineField({
            name: "role",
            description: "Team member's role",
            type: "string",
            title: "Role",
            options: { list: ROLES },
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
            options: {
                list: ["Show price", "Do not show price"],
                layout: "radio",
            },
        }),

        defineField({
            name: "about",
            description: "Team member's short description",

            type: "object",
            fields: [
                defineField({
                    name: "en",
                    title: "English",
                    type: "text",
                    rows: 2,
                }),
                defineField({
                    name: "ua",
                    title: "Ukrainian",
                    type: "text",
                    rows: 2,
                }),
                defineField({
                    name: "pl",
                    title: "Polish",
                    type: "text",
                    rows: 2,
                }),
            ],
        }),
        defineField({
            name: "services",
            description: "Team member's full description/services",
            type: "object",
            fields: [
                defineField({
                    name: "en",
                    title: "English",
                    type: "text",
                    rows: 5,
                }),
                defineField({
                    name: "ua",
                    title: "Ukrainian",
                    type: "text",
                    rows: 5,
                }),
                defineField({
                    name: "pl",
                    title: "Polish",
                    type: "text",
                    rows: 5,
                }),
            ],
        }),
        //TODO: add after creating projects page
        // defineField({
        //     name: "projects",
        //     title: "Projects",
        //     type: "array",
        //     of: [{ type: "reference", to: [{ type: "project" }] }],
        // }),
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
