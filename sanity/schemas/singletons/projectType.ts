import { ProjectsIcon } from "@sanity/icons";
import { defineArrayMember, defineField } from "sanity";

import { SITE_STATUS, STAGES } from "@/sanity/constants";
import { InternationalizedArrayString } from "@/types/sanity.types";
import { validateIsRequired } from "@/sanity/utils/validateIsRequired";

export const projectType = defineField({
    name: "project",
    title: "Projects",
    type: "document",
    icon: ProjectsIcon,
    fields: [
        defineField({
            name: "title",
            description: "Project title",
            type: "internationalizedArrayString",
            title: "Title",
            validation: rule =>
                rule.custom<InternationalizedArrayString>(value => {
                    if (!value || value.every(item => !item.value)) {
                        return "Project title is required";
                    }
                    return true;
                }),
        }),
        defineField({
            name: "description",
            description: "Short project description",
            type: "internationalizedArrayText",
            title: "Description",
        }),
        defineField({
            name: "customers",
            type: "array",
            title: "Customers",
            description: "Enter information about project customers",
            of: [
                defineArrayMember({
                    type: "customer",
                }),
            ],
            validation: rule => rule.required(),
        }),
        defineField({
            name: "startDate",
            description: "The project start date",
            type: "datetime",
            title: "Start date",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "endDate",
            description: "The project end date",
            type: "datetime",
            title: "End date",
        }),
        defineField({
            name: "category",
            description: "Specify the site category",
            title: "Site category",
            type: "reference",
            to: [{ type: "siteCategory" }],
            validation: rule => rule.required(),
        }),

        defineField({
            name: "status",
            description: "The current stage of the project",
            type: "string",
            title: "Status",
            options: {
                list: SITE_STATUS,
            },
            validation: rule => rule.required(),
        }),
        defineField({
            name: "teamMembers",
            description: "Team members who worked on the project",
            type: "array",
            of: [{ type: "reference", to: [{ type: "team" }] }],
        }),
        defineField({
            name: "URL",
            description: "Link to the project",
            type: "linkExternal",
            title: "Project URL",
        }),
        defineField({
            name: "image",
            title: "Project image",
            type: "object",
            fields: [
                {
                    name: "image",
                    title: "Image",
                    description: "Project image to show in portfolio",
                    type: "image",
                    validation: rule => rule.required(),
                },
                {
                    name: "caption",
                    type: "internationalizedArrayString",
                    title: "Caption",
                    description:
                        "A brief description of what is shown in the picture",
                    validation: rule => rule.custom(validateIsRequired),
                },
            ],
            validation: rule => rule.required(),
        }),
        defineField({
            name: "stages",
            description: "The stages we implemented",
            type: "array",
            of: [
                defineArrayMember({
                    type: "string",
                }),
            ],
            options: {
                list: STAGES,
            },

            title: "Stages",
            validation: rule => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: "image",
        },
        prepare({ title, media }) {
            const englishTitle =
                (title as InternationalizedArrayString).find(
                    item => item._key === "en"
                )?.value || "No title";
            return {
                title: `${englishTitle || "No title"}`,
                media: media || undefined,
            };
        },
    },
});
