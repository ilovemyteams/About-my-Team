import { loadHomeHero } from "@/sanity/utils/loadQuery";
import { AboutTheFounderSection } from "@/src/components/aboutPage/AboutTheFounderSection";
import { ChronologySection } from "@/src/components/aboutPage/ChronologySection";
import { HeroAbout } from "@/src/components/aboutPage/HeroAbout";
import { PresentationSection } from "@/src/components/aboutPage/PresentationSection";
import { QuoteSection } from "@/src/components/aboutPage/QuoteSection";
import { TeamSection } from "@/src/components/aboutPage/TeamSection";
import { WriteUsSection } from "@/src/components/writeUsSection/WriteUsSection";
import { HomePageParamsProps } from "@/types/sanityDataPropsTypes";

export default async function About(props: HomePageParamsProps) {
    const cta = await loadHomeHero(props.params.locale);
    return (
        <>
            <HeroAbout />
            <QuoteSection />
            <AboutTheFounderSection />
            <ChronologySection />
            <TeamSection />
            <PresentationSection />
            <WriteUsSection data={cta.data} />
        </>
    );
}
