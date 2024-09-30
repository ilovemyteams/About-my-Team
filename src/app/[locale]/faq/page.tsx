import { PopUpAskUs } from "@/src/components/faqPage/popUpAskUs/PopUpAskUs";
import { QaCardList } from "@/src/components/faqPage/qaSection/QaCardList";
import { FaqSectionCta } from "@/src/components/faqPage/сtaSection/FaqSectionCta";
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
            <PopUpAskUs />
            <QaCardList />
            <FaqSectionCta />
        </>
    );
}
