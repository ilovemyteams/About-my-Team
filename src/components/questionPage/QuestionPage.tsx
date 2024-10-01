import { useLocale } from "next-intl";
import React from "react";

import { QAItemType } from "@/src/mockedData/questionsData";
import { getTextString } from "@/src/utils/getTextString";
import type { LocaleType } from "@/types/LocaleType";

import { QuestionHero } from "./QuestionHero";

interface QuestionPageProps {
    question: QAItemType;
}

export const Question = ({ question }: QuestionPageProps) => {
    const { data } = question;
    const locale = useLocale();

    const {
        questionText,
        fullAnswerList,
        answerText,
        fullAnswerBottomText,
        fullAnswerTopText,
    } = question[locale as LocaleType];

    const fullAnswerTextString = getTextString(fullAnswerList);

    const allTexts = `${answerText} ${fullAnswerTopText || ""} ${fullAnswerBottomText || ""} ${fullAnswerTextString}`;

    return (
        <>
            <QuestionHero
                pageTitle={questionText}
                pageImageUrl={data.image}
                estimateText={allTexts}
            />
        </>
    );
};
