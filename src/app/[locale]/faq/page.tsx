// import { useLocale } from "next-intl";
import { getLocale } from "next-intl/server";

import { HeaderFAQ } from "@/src/components/allQuestionsPage/HeaderFAQ";
import { QaCardList } from "@/src/components/allQuestionsPage/qaSection/QaCardList";
import { FaqSectionCta } from "@/src/components/allQuestionsPage/сtaSection/FaqSectionCta";
import { Pagination } from "@/src/components/shared/Pagination";
import { NothingFound } from "@/src/components/shared/Search/NothingFound";
import { usePaginationData } from "@/src/hooks/usePaginationData";
import { questionsData } from "@/src/mockedData/questionsData";
import { addLikesToQuestion } from "@/src/utils/addLikesToQuestion";
import { generatePageMetadata } from "@/src/utils/generateMetaData";
import { getLikes } from "@/src/utils/likeDataHandler";
import { searchFilteringForFAQ } from "@/src/utils/searchFilteringForFAQ";
import type { LocaleType } from "@/types/LocaleType";
import { RouteSearchParams } from "@/types/RoutesType";

export async function generateMetadata() {
    return generatePageMetadata({
        namespace: "FaqPage",
        canonical: "/faq",
    });
}

export default async function FAQ({
    searchParams,
}: {
    searchParams: RouteSearchParams;
}) {
    const ITEMS_PER_PAGE = 7;
    const locale = await getLocale();
    const likes = await getLikes();
    const { query, page } = await searchParams;
    const searchTerm = query || "";
    const pageNumber = parseInt(page || "1") || 1;

    const questionWithLikes = addLikesToQuestion(likes, questionsData);

    const filteredQuestions = questionWithLikes.filter(question =>
        searchFilteringForFAQ(question, locale as LocaleType, searchTerm)
    );

    const itemsQuantity = filteredQuestions.length;

    const {
        dataSlice: questions,
        totalPages,
        isPaginationNeeded,
    } = usePaginationData(filteredQuestions, ITEMS_PER_PAGE, pageNumber);

    const isCTAVisible = pageNumber === totalPages;

    return (
        <>
            <HeaderFAQ itemsQuantity={itemsQuantity} searchTerm={searchTerm} />
            {itemsQuantity > 0 ? (
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
}
