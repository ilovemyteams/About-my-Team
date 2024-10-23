import { FcServices } from "react-icons/fc";
import { defineField } from "sanity";

export const toolType = defineField({
    name: "tool",
    title: "Tools",
    type: "document",
    icon: FcServices,
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Tool title",
            description: "Enter tool name, for example React, Jira, Figma etc.",
            validation: rule => rule.required(),
        }),
    ],
});
