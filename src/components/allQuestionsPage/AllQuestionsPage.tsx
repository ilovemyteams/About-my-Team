import React from "react";

import { QuestionType } from "@/types/Faqs.types";

import { Pagination } from "../shared/Pagination";
import { NothingFound } from "../shared/Search/NothingFound";
import { HeaderFAQ } from "./HeaderFAQ";
import { QaCardList } from "./qaSection/QaCardList";
import { FaqSectionCta } from "./сtaSection/FaqSectionCta";

interface AllQuestionsPageProps {
    searchTerm: string;
    questions: QuestionType[];
    pageNumber: number;
    totalPages: number;
    totalQuestions: number;
}

export const AllQuestionsPage = ({
    searchTerm,
    questions,
    pageNumber,
    totalPages,
    totalQuestions,
}: AllQuestionsPageProps) => {
    const isPaginationNeeded = totalPages > 1;
    const isCTAVisible = pageNumber === totalPages;

    return (
        <>
            <HeaderFAQ itemsQuantity={totalQuestions} searchTerm={searchTerm} />
            {totalQuestions > 0 ? (
                <QaCardList questions={questions} searchTerm={searchTerm} />
            ) : (
                <NothingFound searchTerm={searchTerm} />
            )}

            {isPaginationNeeded && (
                // It is not real NextUI pagination component
                <Pagination total={totalPages} currentPage={pageNumber} />
            )}

            <FaqSectionCta isSectionVisible={isCTAVisible} />
        </>
    );
};
