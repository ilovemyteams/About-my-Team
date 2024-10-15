import { useLocale } from "next-intl";

import { HeaderFAQ } from "@/src/components/faqPage/HeaderFAQ";
import { QaCardList } from "@/src/components/faqPage/qaSection/QaCardList";
import { FaqSectionCta } from "@/src/components/faqPage/сtaSection/FaqSectionCta";
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
    searchParams: { q?: string };
}) {
    const locale = useLocale();
    const searchTerm = searchParams.q || "";

    const filteredQuestions = questionsData.filter(question =>
        searchFilteringForFAQ(question, locale as LocaleType, searchTerm)
    );

    return (
        <>
            <HeaderFAQ itemsQty={filteredQuestions.length} />
            <QaCardList questions={filteredQuestions} searchTerm={searchTerm} />
            <FaqSectionCta />
        </>
    );
}
