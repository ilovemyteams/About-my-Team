import { LaunchIcon } from "@sanity/icons";
import { defineField } from "sanity";

interface TitleItem {
    _key: string;
    value: string;
}

export const siteCategoryType = defineField({
    name: "siteCategory",
    title: "Site categories",
    type: "document",
    icon: LaunchIcon,
    fields: [
        defineField({
            name: "categoryName",
            title: "Category Name",
            type: "internationalizedArrayString",
        }),
    ],
    preview: {
        select: {
            title: "categoryName",
        },
        prepare({ title }) {
            const englishTitle =
                (title as TitleItem[]).find(
                    (item: TitleItem) => item._key === "en"
                )?.value || "No title";
            return {
                title: `${englishTitle || "No title"}`,
            };
        },
    },
});
