// import { useLocale } from "next-intl";
import { getLocale } from "next-intl/server";

import { AllQuestionsPage } from "@/src/components/allQuestionsPage/AllQuestionsPage";
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

    return (
        <AllQuestionsPage
            itemsPerPage={ITEMS_PER_PAGE}
            pageNumber={pageNumber}
            questions={filteredQuestions}
            searchTerm={searchTerm}
        />
    );
}
