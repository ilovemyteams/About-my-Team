import { PopUpAskUs } from "@/src/components/faqPage/popUpAskUs/PopUpAskUs";
import { QaCardList } from "@/src/components/faqPage/qaSection/QaCardList";
import { FaqSectionCta } from "@/src/components/faqPage/сtaSection/FaqSectionCta";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const getTranslation = await getTranslations({
        locale,
        namespace: "FaqPage",
    });

    return {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        alternates: {
            canonical: "/faq",
            languages: {
                en: "/en",
                pl: "/pl",
                ua: "/",
            },
        },
        title: getTranslation("titleCEO"),
        description: getTranslation("descriptionCEO"),
        openGraph: {
            description: getTranslation("descriptionCEO"),
            title: getTranslation("titleCEO"),
            type: "website",
        },
    };
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
