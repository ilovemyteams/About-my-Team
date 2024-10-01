import { useLocale } from "next-intl";
import React from "react";

import { QAItemType } from "@/src/mockedData/questionsData";
import { LocaleType } from "@/types/LocaleType";

import { QuestionHero } from "./QuestionHero";

interface QuestionPageProps {
    question: QAItemType;
}

export const Question = ({ question }: QuestionPageProps) => {
    const { data } = question;
    const locale = useLocale();

    const { questionText } = question[locale as LocaleType];

    return (
        <>
            <QuestionHero pageTitle={questionText} pageImageUrl={data.image} />
        </>
    );
};
