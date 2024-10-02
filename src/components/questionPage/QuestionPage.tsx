import { useLocale } from "next-intl";
import React from "react";

import { QAItemType } from "@/src/mockedData/questionsData";
import { getTextString } from "@/src/utils/getTextString";
import type { LocaleType } from "@/types/LocaleType";

import { FaqSectionCta } from "../faqPage/сtaSection/FaqSectionCta";
import { HelpfullAnswerSection } from "./HelpfullAnswerSection";
import { QuestionHero } from "./QuestionHero";

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

    const fullAnswerTextString = getTextString(fullAnswerContent);

    const allTexts = `${shortAnswerText} ${fullAnswerTopText?.join(" ") || ""} ${fullAnswerBottomText?.join(" ") || ""} ${fullAnswerTextString}`;

    return (
        <>
            <QuestionHero
                pageTitle={questionText}
                pageImageUrl={data.image}
                estimateText={allTexts}
            />
            <HelpfullAnswerSection />
            <FaqSectionCta />
        </>
    );
};
