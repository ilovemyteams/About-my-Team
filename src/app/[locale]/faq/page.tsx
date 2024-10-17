import { HeaderFAQ } from "@/src/components/faqPage/HeaderFAQ";
import { QaCardList } from "@/src/components/faqPage/qaSection/QaCardList";
import { FaqSectionCta } from "@/src/components/faqPage/сtaSection/FaqSectionCta";
import { generatePageMetadata } from "@/src/utils/generateMetaData";
import { getLikes } from "@/src/utils/likeDataHandler";

export const revalidate = 30;

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

export default async function FAQ() {
    const likes = await getLikes();
    return (
        <>
            <HeaderFAQ />
            <QaCardList likes={likes} />
            <FaqSectionCta />
        </>
    );
}
