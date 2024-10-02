import { useLocale } from "next-intl";
import React from "react";

import { QAItemType } from "@/src/mockedData/questionsData";
import { getTextString } from "@/src/utils/getTextString";
import { normalizeGoogleDriveImgUrls } from "@/src/utils/normalizeGoogleDriveImgUrls";
import type { LocaleType } from "@/types/LocaleType";

import { FaqSectionCta } from "../faqPage/сtaSection/FaqSectionCta";
import { UnderConstruction } from "../underConstruction/UnderConstruction";
import { HelpfullAnswerSection } from "./HelpfullAnswerSection";
import { MainContent } from "./MainContent";
import { OrderCard } from "./OrderCard";
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
            <OrderCard
                imageLink={normalizeGoogleDriveImgUrls(
                    "https://drive.google.com/file/d/1PXF8LyPTsL-6m5TJ0QcpFbUUhhgqH3Ij/view?usp=drive_link"
                )}
            />
            <HelpfullAnswerSection />
            <FaqSectionCta />
        </>
    );
};
