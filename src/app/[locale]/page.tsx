import { loadCTA, loadHomeReviews } from "@/sanity/utils/loadQuery";
import { BackgroundFiguresMain } from "@/src/components/backgroundImages/BackgroundFiguresMain";
import { WriteUsSection } from "@/src/components/CTAs/writeUsSection/WriteUsSection";
import { FeedbackSection } from "@/src/components/mainPage/feedbackSection/FeedbackSection";
import { HeroSection } from "@/src/components/mainPage/heroSection/HeroSection";
import { OurTeamSection } from "@/src/components/mainPage/ourTeamSection/OurTeamSection";
import { PortfolioSection } from "@/src/components/mainPage/portfolioSection/PortfolioSection";
import { QaSection } from "@/src/components/mainPage/qAsection/QaSection";
import { ServicesSection } from "@/src/components/mainPage/servicesSection/ServicesSection";
import { StagesSection } from "@/src/components/mainPage/stagesSection/StagesSection";
import { PageParamsProps } from "@/types/sanityDataPropsTypes";

export default async function HomePage(props: PageParamsProps) {
    const [cta, reviews] = await Promise.all([
        await loadCTA(props.params.locale),
        await loadHomeReviews(props.params.locale),
    ]);

    return (
        <>
            <BackgroundFiguresMain />
            <HeroSection />
            <PortfolioSection />
            <FeedbackSection data={reviews} />
            <WriteUsSection data={cta?.ctaSectionWriteUs} />
            <ServicesSection />
            <OurTeamSection />
            <StagesSection />
            <QaSection />
        </>
    );
}
