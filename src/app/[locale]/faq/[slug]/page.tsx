import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

import { Question } from "@/src/components/questionPage/QuestionPage";
import { QAItemType, questionsData } from "@/src/mockedData/questionsData";
import { LocaleType } from "@/types/LocaleType";

interface QuestionPageProps {
    params: {
        slug: string;
        locale: string;
    };
    searchParams: { q?: string };
}

export async function generateMetadata(
    { params }: QuestionPageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const displayedQuestion: QAItemType | undefined = questionsData.find(
        question => question.data.slug === params.slug
    );

    if (!displayedQuestion) {
        return {
            title: "Question Not Found",
            description: "The requested question does not exist.",
        };
    }
    const previousImages = (await parent).openGraph?.images || [];
    const localization = displayedQuestion[params.locale as LocaleType];
    return {
        title: localization.questionText,
        description: localization.shortAnswerText.join(""),
        openGraph: {
            images: [...previousImages],
        },
    };
}

const QuestionPage: React.FC<QuestionPageProps> = ({
    params,
    searchParams,
}) => {
    const searchTerm = searchParams.q || "";
    const displayedQuestion = questionsData.find(
        question => question.data.slug === params.slug
    );
    if (!displayedQuestion) {
        notFound();
    }

    return <Question question={displayedQuestion} searchTerm={searchTerm} />;
};

export default QuestionPage;
