import { defineField } from "sanity";
import { RobotIcon } from "@sanity/icons";

export const specialistType = defineField({
    name: "specialist",
    type: "document",
    title: "Specialist roles",
    icon: RobotIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Specialist name",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "category",
            type: "reference",
            to: { type: "specialistCategory" },
            title: "Category",
            validation: rule => rule.required(),
        }),
    ],
});
