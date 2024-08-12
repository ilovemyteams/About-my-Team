import { ProjectsIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { SITE_CATEGORY, SITE_STATUS } from "@/sanity/constants";

const TITLE = "Projects";

export const projectType = defineField({
    name: "project",
    title: TITLE,
    type: "document",
    icon: ProjectsIcon,
    fields: [
        defineField({
            name: "title",
            description: "Project title",
            type: "internationalizedArrayString",
            title: "Title",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "description",
            description: "Short project description",
            type: "internationalizedArrayText",
            title: "Description",
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
            name: "siteCategory",
            description: "Specify the site category",
            type: "string",
            title: "Site category",
            options: {
                list: SITE_CATEGORY,
            },
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
        //TODO when teamType is ready
        // defineField({
        //     name: "teamMembers",
        //     type: "array",
        //     of: [defineArrayMember({ type: "team" })],
        // }),
        defineField({
            name: "URL",
            description: "Link to the project",
            type: "linkExternal",
            title: "Project URL",
        }),
        defineField({
            name: "image",
            description: "Project image to show in portfolio",
            type: "image",
            title: "Project image",
            validation: rule => rule.required(),
        }),
    ],
    preview: {
        prepare() {
            return {
                title: TITLE,
            };
        },
    },
});
