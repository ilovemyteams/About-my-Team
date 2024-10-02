import { useLocale } from "next-intl";
import React from "react";

import { QAItemType } from "@/src/mockedData/questionsData";
import { getTextString } from "@/src/utils/getTextString";
import type { LocaleType } from "@/types/LocaleType";

import { QuestionHero } from "./QuestionHero";
import { TopTextSection } from "./TopTextSection";

interface QuestionPageProps {
    question: QAItemType;
}

export const Question = ({ question }: QuestionPageProps) => {
    const { data } = question;
    const locale = useLocale();

    const {
        questionText,
        fullAnswerContent,
        shortAnswerText,
        fullAnswerBottomText,
        fullAnswerTopText,
    } = question[locale as LocaleType];

    const { image, answerTopImage } = data;

    const fullAnswerTextString = getTextString(fullAnswerContent);

    const allTexts = `${shortAnswerText} ${fullAnswerTopText?.join(" ") || ""} ${fullAnswerBottomText?.join(" ") || ""} ${fullAnswerTextString}`;

    return (
        <>
            <QuestionHero
                pageTitle={questionText}
                pageImageUrl={image}
                estimateText={allTexts}
            />
            <TopTextSection
                shortAnswer={shortAnswerText}
                fullAnswerText={fullAnswerTopText}
                imageUrl={answerTopImage}
            />
        </>
    );
};
