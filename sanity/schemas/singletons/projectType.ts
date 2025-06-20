import { FcPicture } from "react-icons/fc";
import { defineArrayMember, defineField } from "sanity";

import { SITE_STATUS, STAGES } from "@/sanity/constants";
import { getEnglishTitleFromIntArrays } from "@/sanity/utils/getEnglishTitleFromIntArrays";
import { validateIsRequired } from "@/sanity/utils/validateIsRequired";

export const projectType = defineField({
    name: "project",
    title: "Projects",
    type: "document",
    icon: FcPicture,
    fields: [
        defineField({
            name: "title",
            description: "Project title",
            type: "internationalizedArrayString",
            title: "Title",
            validation: rule => rule.custom(validateIsRequired),
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
            of: [{ type: "reference", to: [{ type: "customer" }] }],
            title: "Customers",
            description: "Add information about project customers",
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
            options: {
                collapsed: true,
                collapsible: true,
            },
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
            media: "image.image",
        },
        prepare({ title, media }) {
            const englishTitle = getEnglishTitleFromIntArrays(title);
            return {
                title: englishTitle,
                media: media || undefined,
            };
        },
    },
});
