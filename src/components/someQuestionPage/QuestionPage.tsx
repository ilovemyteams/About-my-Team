// import { getLocale } from "next-intl/server";
import React from "react";

import { CurrentFaqQueryResult } from "@/sanity/types";

import { CtaSectionAskUs } from "./CtaSection/CtaSectionAskUs";
import { HelpfullAnswerSection } from "./HelpfullAnswerSection";
import { MainContent } from "./MainContent";
import { OrderCard } from "./OrderCard";
// import type { LocaleType } from "@/types/LocaleType";
// import { UnderConstruction } from "../underConstruction/UnderConstruction";
// import { CtaSectionAskUs } from "./CtaSection/CtaSectionAskUs";
// import { HelpfullAnswerSection } from "./HelpfullAnswerSection";
// import { MainContent } from "./MainContent";
// import { OrderCard } from "./OrderCard";
import { QuestionHero } from "./QuestionHero";
import { TopTextSection } from "./TopTextSection/TopTextSection";

interface QuestionPageProps {
    question: NonNullable<CurrentFaqQueryResult>;
    searchTerm: string;
}

export const Question = async ({ question, searchTerm }: QuestionPageProps) => {
    const {
        question: questionText,
        heroImage,
        additionalTextShortAnswer,
        shortAnswer,
        estimateReadTime,
        orderImage,
        orderText,
        likes,
        mainContent,
        _id: docId,
    } = question;

    return (
        <>
            <QuestionHero
                pageTitle={questionText}
                pageImage={heroImage}
                estimateTime={estimateReadTime}
                searchTerm={searchTerm}
            />
            <TopTextSection
                shortAnswer={shortAnswer}
                additionalShortAnswer={additionalTextShortAnswer}
                searchTerm={searchTerm}
            />

            {mainContent && (
                <MainContent content={mainContent} searchTerm={searchTerm} />
            )}

            {orderText && (
                <OrderCard
                    image={orderImage}
                    orderText={orderText}
                    searchTerm={searchTerm}
                />
            )}
            <HelpfullAnswerSection questionLikes={likes || []} docId={docId} />
            <CtaSectionAskUs />
            {/* {fullAnswerContent ? (
                <>
                    <MainContent
                        content={fullAnswerContent}
                        searchTerm={searchTerm}
                    />

                    
                   
                </>
            ) : (
                <UnderConstruction />
            )} */}
        </>
    );
};
