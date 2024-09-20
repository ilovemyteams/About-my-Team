import { defineArrayMember, defineField, defineType } from "sanity";

export const pagesType = defineType({
    name: "pages",
    type: "document",
    title: "Pages",
    fields: [
        defineField({
            name: "pageSlug",
            type: "slug",
            title: "Page Slug",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "title",
            title: "Page title",
            description:
                "Сhoose the accent color of specific words for each language",
            type: "internationalizedArrayPortableColorTitle",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "pageBuilder",
            type: "array",
            title: "Page builder",
            of: [
                defineArrayMember({
                    name: "hero",
                    type: "heroHome",
                }),

                defineArrayMember({
                    name: "callToAction",
                    type: "callToAction",
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            return {
                subtitle: "Page",
                title,
            };
        },
    },
});
