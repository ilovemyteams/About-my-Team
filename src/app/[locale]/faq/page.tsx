import { useLocale } from "next-intl";

import { HeaderFAQ } from "@/src/components/faqPage/HeaderFAQ";
import { QaCardList } from "@/src/components/faqPage/qaSection/QaCardList";
import { FaqSectionCta } from "@/src/components/faqPage/сtaSection/FaqSectionCta";
import { Pagination } from "@/src/components/shared/Pagination";
import { NothingFound } from "@/src/components/shared/Search/NothingFound";
import { usePaginationData } from "@/src/hooks/usePaginationData";
import { questionsData } from "@/src/mockedData/questionsData";
import { generatePageMetadata } from "@/src/utils/generateMetaData";
import { searchFilteringForFAQ } from "@/src/utils/searchFilteringForFAQ";
import type { LocaleType } from "@/types/LocaleType";

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    return generatePageMetadata({
        locale,
        namespace: "FaqPage",
        canonical: "/faq",
    });
}

export default function FAQ({
    searchParams,
}: {
    searchParams: { query?: string; page: string };
}) {
    const ITEMS_PER_PAGE = 7;
    const locale = useLocale();
    const searchTerm = searchParams.query || "";
    const pageNumber = parseInt(searchParams.page) || 1;

    const filteredQuestions = questionsData.filter(question =>
        searchFilteringForFAQ(question, locale as LocaleType, searchTerm)
    );

    const itemsQuantity = filteredQuestions.length;

    const { questions, totalPages, isPaginationNeeded } = usePaginationData(
        filteredQuestions,
        ITEMS_PER_PAGE,
        pageNumber
    );

    return (
        <>
            <HeaderFAQ itemsQuantity={itemsQuantity} searchTerm={searchTerm} />
            {itemsQuantity > 0 ? (
                <QaCardList questions={questions} searchTerm={searchTerm} />
            ) : (
                <NothingFound searchTerm={searchTerm} />
            )}

            {isPaginationNeeded && (
                // It si not real NextUI pagination component
                <Pagination total={totalPages} initialPage={pageNumber} />
            )}

            {pageNumber === totalPages && <FaqSectionCta />}
        </>
    );
}
