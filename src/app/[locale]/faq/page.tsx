import { PopUpAskUs } from "@/src/components/faqPage/popUpAskUs/PopUpAskUs";
import { QaCardList } from "@/src/components/faqPage/qaSection/QaCardList";
import { FaqSectionCta } from "@/src/components/faqPage/сtaSection/FaqSectionCta";

export default function FAQ() {
    return (
        <>
            <PopUpAskUs />
            <QaCardList />
            <FaqSectionCta />
        </>
    );
}
