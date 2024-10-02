import { useLocale } from "next-intl";
import React from "react";

import { QAItemType } from "@/src/mockedData/questionsData";
import { getTextString } from "@/src/utils/getTextString";
import type { LocaleType } from "@/types/LocaleType";

import { FaqSectionCta } from "../faqPage/сtaSection/FaqSectionCta";
import { UnderConstruction } from "../underConstruction/UnderConstruction";
import { HelpfullAnswerSection } from "./HelpfullAnswerSection";
import { MainContent } from "./MainContent";
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

    const { image, answerTopImage, layout } = data;

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
            {fullAnswerContent && layout ? (
                <MainContent layout={layout} content={fullAnswerContent} />
            ) : (
                <UnderConstruction />
            )}
            <HelpfullAnswerSection />
            <FaqSectionCta />
        </>
    );
};
