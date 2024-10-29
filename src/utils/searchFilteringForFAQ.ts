import { LocaleType } from "@/types/LocaleType";

import type {
    LongAnswerListTextType,
    LongAnswerListType,
    QAItemType,
} from "../mockedData/questionsData";

export const searchFilteringForFAQ = (
    question: QAItemType,
    locale: LocaleType,
    searchValue: string
) => {
    const data = question[locale as LocaleType];
    const lowerCasedSearchTerm = searchValue.toLowerCase();

    const questionText = cleanText(data.questionText);
    const shortAnswerText = cleanText(data.shortAnswerText.join(""));
    const fullAnswerTopText = cleanText(data.fullAnswerTopText?.join("") || "");
    const stepsTexts = cleanText(joinAnswerTexts(data.fullAnswerContent || []));
    const bottomText = data.fullAnswerBottomText?.join("") || "";

    if (
        questionText.includes(lowerCasedSearchTerm) ||
        shortAnswerText.includes(lowerCasedSearchTerm) ||
        fullAnswerTopText.includes(lowerCasedSearchTerm) ||
        stepsTexts.includes(lowerCasedSearchTerm) ||
        bottomText.includes(lowerCasedSearchTerm)
    ) {
        return question;
    }
};

function cleanText(text: string): string {
    const linkPattern = /\*link=.*?\*.*?\*\/link\*/gi;
    return text.replaceAll(linkPattern, "").toLowerCase();
}

function flattenText(
    text: string | string[] | LongAnswerListTextType[]
): string {
    if (typeof text === "string") {
        return text;
    }
    if (Array.isArray(text)) {
        return text
            .map(item => {
                if (typeof item === "string") {
                    return item;
                }
                if (typeof item === "object" && "text" in item) {
                    return item.title + flattenText(item.text);
                }
                return "";
            })
            .join("");
    }
    return "";
}

function joinAnswerTexts(answerContent: LongAnswerListType[]): string {
    if (answerContent.length === 0) return "";
    return answerContent.reduce((acc: string, item) => {
        acc += item.title + flattenText(item.text);
        return acc;
    }, "");
}
