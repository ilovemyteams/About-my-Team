import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

import { HeaderFAQ } from "@/src/components/faqPage/HeaderFAQ";
import { QaCardList } from "@/src/components/faqPage/qaSection/QaCardList";
import { FaqSectionCta } from "@/src/components/faqPage/сtaSection/FaqSectionCta";
import { Section } from "@/src/components/shared/Section";
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
    searchParams: { query?: string };
}) {
    const locale = useLocale();
    const getTranslation = useTranslations();
    const searchTerm = searchParams.query || "";

    const filteredQuestions = questionsData.filter(question =>
        searchFilteringForFAQ(question, locale as LocaleType, searchTerm)
    );

    return (
        <>
            <HeaderFAQ itemsQuantity={filteredQuestions.length} />
            {filteredQuestions.length > 0 ? (
                <QaCardList
                    questions={filteredQuestions}
                    searchTerm={searchTerm}
                />
            ) : (
                <Section className="flex flex-col gap-3 mt-8">
                    <p className="font-caviar text-lg tab:text-xlb pc:text-4xl text-purple-200 dark:text-grey w-auto tab:w-1/2">
                        {getTranslation("Q&A.noAnswerFound", { searchTerm })}
                    </p>
                </Section>
            )}
            <FaqSectionCta />
        </>
    );
}
