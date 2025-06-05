import { HeaderFAQ } from "@/src/components/allQuestionsPage/HeaderFAQ";
import { QaCardList } from "@/src/components/allQuestionsPage/qaSection/QaCardList";
import { FaqSectionCta } from "@/src/components/allQuestionsPage/сtaSection/FaqSectionCta";
import { generatePageMetadata } from "@/src/utils/generateMetaData";

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

export default function FAQ() {
    return (
        <>
            <HeaderFAQ />
            <QaCardList />
            <FaqSectionCta />
        </>
    );
}
