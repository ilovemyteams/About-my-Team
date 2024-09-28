import { getTranslations } from "next-intl/server";

import { AboutTheFounderSection } from "@/src/components/aboutPage/AboutTheFounderSection";
import { ChronologySection } from "@/src/components/aboutPage/ChronologySection";
import { HeroAbout } from "@/src/components/aboutPage/HeroAbout";
import { PresentationSection } from "@/src/components/aboutPage/PresentationSection";
import { QuoteSection } from "@/src/components/aboutPage/QuoteSection";
import { TeamSection } from "@/src/components/aboutPage/TeamSection";
import { WriteUsSection } from "@/src/components/writeUsSection/WriteUsSection";

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const getTranslation = await getTranslations({
        locale,
        namespace: "AboutPage",
    });

    return {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        alternates: {
            canonical: "/about",
            languages: {
                en: "/en/about",
                pl: "/pl/about",
                ua: "/about",
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

export default function About() {
    return (
        <>
            <HeroAbout />
            <QuoteSection />
            <AboutTheFounderSection />
            <ChronologySection />
            <TeamSection />
            <PresentationSection />
            <WriteUsSection />
        </>
    );
}
