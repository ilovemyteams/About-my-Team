import { AboutTheFounderSection } from "@/src/components/aboutPage/AboutTheFounderSection";
import { ChronologySection } from "@/src/components/aboutPage/ChronologySection";
import { HeroAbout } from "@/src/components/aboutPage/HeroAbout";
import { PresentationSection } from "@/src/components/aboutPage/PresentationSection";
import { QuoteSection } from "@/src/components/aboutPage/QuoteSection";
import { TeamSection } from "@/src/components/aboutPage/TeamSection";
import { WriteUsSection } from "@/src/components/CTAs/writeUsSection/WriteUsSection";
import { generatePageMetadata } from "@/src/utils/generateMetaData";

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    return generatePageMetadata({
        locale,
        namespace: "AboutPage",
        canonical: "/about-us",
    });
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
            <WriteUsSection text="titleIWant" />
        </>
    );
}
