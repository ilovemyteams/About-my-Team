import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import React from "react";

import { Question } from "@/src/components/someQuestionPage/QuestionPage";
import { QAItemType, questionsData } from "@/src/mockedData/questionsData";
import { LocaleType } from "@/types/LocaleType";
import { RouteSearchParams, RouteSlugParams } from "@/types/RoutesType";

type RouteType = RouteSlugParams;
interface QuestionPageProps {
    params: RouteType;
    searchParams: RouteSearchParams;
}

export async function generateMetadata(
    { params }: QuestionPageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const locale = await getLocale();
    const { slug } = await params;
    const displayedQuestion: QAItemType | undefined = questionsData.find(
        question => question.data.slug === slug
    );

    if (!displayedQuestion) {
        return {
            title: "Question Not Found",
            description: "The requested question does not exist.",
        };
    }
    const previousImages = (await parent).openGraph?.images || [];
    const localization = displayedQuestion[locale as LocaleType];
    return {
        title: localization.questionText,
        description: localization.shortAnswerText.join(""),
        openGraph: {
            images: [...previousImages],
        },
    };
}

const QuestionPage: React.FC<QuestionPageProps> = async ({
    params,
    searchParams,
}) => {
    const { query } = await searchParams;
    const { slug } = await params;
    const searchTerm = query || "";
    const displayedQuestion = questionsData.find(
        question => question.data.slug === slug
    );
    if (!displayedQuestion) {
        notFound();
    }

    return <Question question={displayedQuestion} searchTerm={searchTerm} />;
};

export default QuestionPage;
