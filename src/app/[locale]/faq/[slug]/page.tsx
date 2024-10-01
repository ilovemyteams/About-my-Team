import { notFound } from "next/navigation";
import React from "react";

import { Question } from "@/src/components/questionPage/QuestionPage";
import { questionsData } from "@/src/mockedData/questionsData";

interface QuestionPageProps {
    params: {
        slug: string;
    };
}

const QuestionPage: React.FC<QuestionPageProps> = ({ params }) => {
    const displayedQuestion = questionsData.find(
        question => question.data.slug === params.slug
    );
    if (!displayedQuestion) {
        notFound();
    }

    return <Question question={displayedQuestion} />;
};

export default QuestionPage;
