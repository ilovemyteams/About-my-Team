import {
    InternationalizedArrayString,
    InternationalizedArrayText,
} from "@/types/sanity.types";

export const getEnglishTitleFromIntArrays = (
    title: InternationalizedArrayString | InternationalizedArrayText
) => {
    if (!title) {
        return "No title";
    }
    const englishTitle =
        title.find(item => item._key === "en")?.value || "No title";
    return englishTitle;
};
