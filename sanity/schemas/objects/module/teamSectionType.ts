import { UsersIcon } from "@sanity/icons";
import pluralize from "pluralize-esm";
import { defineArrayMember, defineField } from "sanity";

export const teamSectionType = defineField({
    name: "teamSection",
    title: "Team",
    type: "object",
    icon: UsersIcon,
    fields: [
        defineField({
            name: "items",
            type: "array",
            of: [defineArrayMember({ type: "team" })],
        }),
    ],
    preview: {
        select: {
            items: "items",
        },
        prepare({ items }) {
            return {
                subtitle: "Team Section",
                title:
                    items?.length > 0
                        ? pluralize("item", items.length, true)
                        : "No items",
            };
        },
    },
});
