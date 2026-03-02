import React from "react";

import { usePaginationData } from "@/src/hooks/usePaginationData";
import { QAItemLocalizationTextType } from "@/src/mockedData/questionsData";
import { LikesTypes } from "@/src/utils/likeDataHandler";

import { Pagination } from "../shared/Pagination";
import { NothingFound } from "../shared/Search/NothingFound";
import { HeaderFAQ } from "./HeaderFAQ";
import { QaCardList } from "./qaSection/QaCardList";
import { FaqSectionCta } from "./сtaSection/FaqSectionCta";

type QuestionType = {
    data: {
        likes: LikesTypes[];
        slug: string;
        image: string;
        answerOrderImage?: string;
        removeOrderBtn?: boolean;
    };
    ua: QAItemLocalizationTextType;
    pl: QAItemLocalizationTextType;
    en: QAItemLocalizationTextType;
};

interface AllQuestionsPageProps {
    searchTerm: string;
    questions: QuestionType[];
    pageNumber: number;
    itemsPerPage: number;
}

export const AllQuestionsPage = ({
    searchTerm,
    questions,
    pageNumber,
    itemsPerPage,
}: AllQuestionsPageProps) => {
    const itemsQuantity = questions.length;

    const {
        dataSlice: questionsWithPagination,
        totalPages,
        isPaginationNeeded,
    } = usePaginationData(questions, itemsPerPage, pageNumber);

    const isCTAVisible = pageNumber === totalPages;
    return (
        <>
            <HeaderFAQ itemsQuantity={itemsQuantity} searchTerm={searchTerm} />
            {itemsQuantity > 0 ? (
                <QaCardList
                    questions={questionsWithPagination}
                    searchTerm={searchTerm}
                />
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
