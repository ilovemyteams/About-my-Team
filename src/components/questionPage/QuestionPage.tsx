import { getLocale } from "next-intl/server";
import React from "react";

import { QAItemType } from "@/src/mockedData/questionsData";
import { getTextString } from "@/src/utils/getTextString";
import { getLikes } from "@/src/utils/likeDataHandler";
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

export const Question = async ({ question, searchTerm }: QuestionPageProps) => {
    const { data } = question;
    const locale = await getLocale();

    const {
        questionText,
        fullAnswerContent,
        shortAnswerText,
        fullAnswerBottomText,
        fullAnswerTopText,
        imageAltText,
    } = question[locale as LocaleType];

    const { image, answerOrderImage, slug, removeOrderBtn } = data;

    const fullAnswerTextString = getTextString(fullAnswerContent);

    const allTexts = `${shortAnswerText} ${fullAnswerTopText?.join(" ") || ""} ${fullAnswerBottomText?.join(" ") || ""} ${fullAnswerTextString}`;

    const allLikes = await getLikes();
    const questionLikes = allLikes.filter(item => item.questionSlug === slug);

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
                searchTerm={searchTerm}
            />
            {fullAnswerContent ? (
                <>
                    <MainContent
                        content={fullAnswerContent}
                        searchTerm={searchTerm}
                    />

                    <OrderCard
                        imageLink={answerOrderImage}
                        fullAnswerBottomText={fullAnswerBottomText}
                        imageAltText={imageAltText}
                        removedOrderBtn={!!removeOrderBtn}
                        searchTerm={searchTerm}
                    />
                    <HelpfullAnswerSection
                        questionLikes={questionLikes}
                        questionSlug={slug}
                    />
                    <CtaSectionAskUs />
                </>
            ) : (
                <UnderConstruction />
            )}
        </>
    );
};
