import { useLocale } from "next-intl";
import React from "react";

import { QAItemType } from "@/src/mockedData/questionsData";
import { getTextString } from "@/src/utils/getTextString";
import type { LocaleType } from "@/types/LocaleType";

import { UnderConstruction } from "../underConstruction/UnderConstruction";
import { CtaSectionAskUs } from "./CtaSection/CtaSectionAskUs";
import { HelpfullAnswerSection } from "./HelpfullAnswerSection";
import { MainContent } from "./MainContent";
import { OrderCard } from "./OrderCard";
import { QuestionHero } from "./QuestionHero";
import { TopTextSection } from "./TopTextSection/TopTextSection";

interface QuestionPageProps {
    question: QAItemType;
    searchTerm: string;
}

export const Question = ({ question, searchTerm }: QuestionPageProps) => {
    const { data } = question;
    const locale = useLocale();

    const {
        questionText,
        fullAnswerContent,
        shortAnswerText,
        fullAnswerBottomText,
        fullAnswerTopText,
        imageAltText,
    } = question[locale as LocaleType];

    const { image, answerTopImage, layout, answerOrderImage } = data;

    const fullAnswerTextString = getTextString(fullAnswerContent);

    const allTexts = `${shortAnswerText} ${fullAnswerTopText?.join(" ") || ""} ${fullAnswerBottomText?.join(" ") || ""} ${fullAnswerTextString}`;

    return (
        <>
            <QuestionHero
                pageTitle={questionText}
                pageImageUrl={image}
                estimateText={allTexts}
                searchTerm={searchTerm}
            />
            <TopTextSection
                shortAnswer={shortAnswerText}
                fullAnswerText={fullAnswerTopText}
                imageUrl={answerTopImage}
                searchTerm={searchTerm}
            />
            {fullAnswerContent && layout ? (
                <>
                    <MainContent
                        locale={locale as LocaleType}
                        layout={layout}
                        content={fullAnswerContent}
                        searchTerm={searchTerm}
                    />

                    <OrderCard
                        imageLink={answerOrderImage}
                        fullAnswerBottomText={fullAnswerBottomText}
                        imageAltText={imageAltText}
                    />
                    <HelpfullAnswerSection />
                    <CtaSectionAskUs />
                </>
            ) : (
                <UnderConstruction />
            )}
        </>
    );
};
