import { ProjectsIcon } from "@sanity/icons";
import { defineField } from "sanity";

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
            type: "string",
            title: "Title",
            validation: rule => rule.max(35).required(),
        }),
        defineField({
            name: "description",
            description: "Short project description",
            type: "string",
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
            name: "type",
            description: "Specify the site type",
            type: "string",
            title: "Site type",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "status",
            description: "The current stage of the project",
            type: "string",
            title: "Status",
            validation: rule => rule.required(),
        }),
        //TODO when teamType is ready
        // defineField({
        //     name: "teamMembers",
        //     type: "array",
        //     of: [defineArrayMember({ type: "teamMembers" })],
        // }),
        defineField({
            name: "URL",
            description: "Link to the project",
            type: "url",
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
