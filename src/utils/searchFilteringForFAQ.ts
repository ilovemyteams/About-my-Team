import type { LocaleType } from "@/types/LocaleType";

import type { QAItemType } from "../mockedData/questionsData";
import type { LongAnswerListTextType } from "../mockedData/questionsData";

export const searchFilteringForFAQ = (
    question: QAItemType,
    locale: LocaleType,
    searchValue: string
) => {
    const data = question[locale as LocaleType];
    const lowerCasedSearchTerm = searchValue.toLowerCase();
    const stepsTexts = data.fullAnswerContent
        ?.reduce((acc: (string | LongAnswerListTextType)[], item) => {
            acc.push(item.title);
            acc.push(...item.text);
            return acc;
        }, [])
        .join("");
    if (
        data.questionText.toLowerCase().includes(lowerCasedSearchTerm) ||
        data.shortAnswerText
            .join("")
            .toLowerCase()
            .includes(lowerCasedSearchTerm) ||
        data.fullAnswerTopText?.join("").includes(lowerCasedSearchTerm) ||
        stepsTexts?.includes(lowerCasedSearchTerm)
    ) {
        return question;
    }
};
