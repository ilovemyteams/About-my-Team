import { getLocale } from "next-intl/server";

import { loadFAQsList } from "@/sanity/utils/loadQuery";
import { AllQuestionsPage } from "@/src/components/allQuestionsPage/AllQuestionsPage";
import { generatePageMetadata } from "@/src/utils/generateMetaData";
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
    const locale = await getLocale();
    const ITEMS_PER_PAGE = 7;
    const { query, page } = await searchParams;
    const searchTerm = query || "";
    const pageNumber = parseInt(page || "1") || 1;

    const start = (pageNumber - 1) * ITEMS_PER_PAGE;
    const end = pageNumber * ITEMS_PER_PAGE;

    const { faqs, total } = await loadFAQsList(locale, start, end);

    // const likes = await getLikes();

    // const questionWithLikes = addLikesToQuestion(likes, questionsData);
    const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

    // const filteredQuestions = questionWithLikes.filter(question =>
    //     searchFilteringForFAQ(question, locale as LocaleType, searchTerm)
    // );

    return (
        <AllQuestionsPage
            totalPages={totalPages}
            pageNumber={pageNumber}
            questions={faqs}
            searchTerm={searchTerm}
        />
    );
}
