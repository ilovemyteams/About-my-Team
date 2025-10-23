import {
    InternationalizedArrayPortableText,
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

export const getUkrainianTitleFromIntArrays = (
    title: InternationalizedArrayString | InternationalizedArrayText,
    fallbackMessage: string = "Не вказано"
) => {
    if (!title) {
        return fallbackMessage;
    }
    const uaTitle =
        title.find(item => item._key === "ua")?.value || fallbackMessage;
    return uaTitle;
};

export const getUkrainianBlockFromIntArrays = (
    blocks: InternationalizedArrayPortableText,
    fallbackMessage: string = "Не вказано"
) => {
    if (!blocks) {
        return fallbackMessage;
    }
    const uaBlocks =
        blocks.find(item => item._key === "ua")?.value || fallbackMessage;
    return uaBlocks;
};
