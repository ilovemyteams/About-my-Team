import { notFound } from "next/navigation";
import React from "react";

import { Question } from "@/src/components/questionPage/QuestionPage";
import { questionsData } from "@/src/mockedData/questionsData";

interface QuestionPageProps {
    params: {
        slug: string;
    };
    searchParams: { q?: string };
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
