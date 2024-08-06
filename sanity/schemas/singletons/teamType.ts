import { defineArrayMember, defineField } from "sanity";
import { UsersIcon } from "@sanity/icons";
import { ROLES } from "@/sanity/constants";

export const teamType = defineField({
    name: "team",
    title: "Team member's card",
    type: "document",
    icon: UsersIcon,
    fields: [
        defineField({
            name: "name",
            description: "Team member's name",
            type: "object",
            fields: [
                defineField({
                    name: "en",
                    title: "English Name",
                    type: "string",
                }),
                defineField({
                    name: "ua",
                    title: "Ukrainian Name",
                    type: "string",
                }),
                defineField({
                    name: "pl",
                    title: "Polish Name",
                    type: "string",
                }),
            ],
        }),
        defineField({
            name: "role",
            description: "Team member's role",
            type: "string",
            title: "Role",
            options: { list: ROLES },
            validation: Rule =>
                Rule.required().custom(value => {
                    if (!value) {
                        return "Please choose a role";
                    }
                    return true;
                }),
        }),
        defineField({
            name: "about",
            description: "Team member's short description",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "services",
            description: "Team member's full description/services",
            type: "text",
            rows: 10,
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
            name: "name.en",
            subtitle: "role",
            media: "photo",
        },
        prepare({ name, subtitle, media }) {
            return {
                title: `${name || "No name"}`,
                subtitle: subtitle || "No role",
                media: media || undefined,
            };
        },
    },
});
