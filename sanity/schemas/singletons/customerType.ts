import { FcBusinessman } from "react-icons/fc";
import { defineArrayMember, defineField } from "sanity";

import { GENDER_OPTIONS } from "@/sanity/constants";
import { getEnglishTitleFromIntArrays } from "@/sanity/utils/getEnglishTitleFromIntArrays";
import { validateIsRequired } from "@/sanity/utils/validateIsRequired";

export const customerType = defineField({
    name: "customer",
    title: "Customers",
    type: "document",
    icon: FcBusinessman,
    fields: [
        defineField({
            name: "name",
            type: "internationalizedArrayString",
            title: "Client name",
            validation: rule => rule.custom(validateIsRequired),
        }),
        defineField({
            name: "position",
            type: "internationalizedArrayString",
            title: "Client position",
            validation: rule => rule.custom(validateIsRequired),
        }),
        defineField({
            name: "phoneNumber",
            type: "array",
            of: [
                {
                    type: "string",
                    validation: Rule =>
                        Rule.regex(
                            /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/i,
                            {
                                invert: false,
                            }
                        ).error("Please enter a valid phone number"),
                },
            ],
            title: "Phone numbers",
        }),
        defineField({
            name: "socialLinks",
            type: "array",
            of: [defineArrayMember({ type: "socialLinks" })],
            title: "Social links",
        }),
        defineField({
            name: "gender",
            type: "string",
            options: {
                list: GENDER_OPTIONS,
            },
            title: "Gender",
        }),
        defineField({
            name: "country",
            type: "string",
            title: "Country",
        }),
        defineField({
            name: "comment",
            type: "text",
            title: "Comment",
        }),
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "position",
        },
        prepare({ title, subtitle }) {
            const englishName = getEnglishTitleFromIntArrays(title);
            const englishPosition = getEnglishTitleFromIntArrays(subtitle);
            return {
                title: englishName,
                subtitle: englishPosition,
            };
        },
    },
});
