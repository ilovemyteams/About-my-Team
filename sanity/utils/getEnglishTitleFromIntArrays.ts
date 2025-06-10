import {
    InternationalizedArrayString,
    InternationalizedArrayText,
} from "@/types/sanity.types";

export const getEnglishTitleFromIntArrays = (
    title: InternationalizedArrayString | InternationalizedArrayText,
    fallbackMessage: string = "No title"
) => {
    if (!title) {
        return fallbackMessage;
    }
    const englishTitle =
        title.find(item => item._key === "en")?.value || fallbackMessage;
    return englishTitle;
};
