import { ProjectsIcon } from "@sanity/icons";
import { defineArrayMember, defineField } from "sanity";

import { SITE_CATEGORY, SITE_STATUS, STAGES } from "@/sanity/constants";

interface TitleItem {
    _key: string;
    value: string;
}

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
                (title as TitleItem[]).find(
                    (item: TitleItem) => item._key === "en"
                )?.value || "No title";
            return {
                title: `${englishTitle || "No title"}`,
                media: media || undefined,
            };
        },
    },
});
