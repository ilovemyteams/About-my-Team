import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import React from "react";

import { Question } from "@/src/components/someQuestionPage/QuestionPage";
import { loadCurrentFaq } from "@/src/sanity/lib/loadQuery";
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

    const displayedQuestion = await loadCurrentFaq(locale, slug);
    if (!displayedQuestion) {
        return {
            title: "Question Not Found",
            description: "The requested question does not exist.",
        };
    }
    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: displayedQuestion.question,
        description: displayedQuestion.shortAnswer,
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
    const locale = await getLocale();
    const { slug } = await params;
    const searchTerm = query || "";
    const displayedQuestion = await loadCurrentFaq(locale, slug);

    if (!displayedQuestion) {
        notFound();
    }

    return <Question question={displayedQuestion} searchTerm={searchTerm} />;
};

export default QuestionPage;
