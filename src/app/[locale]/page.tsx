import {
    loadCTA,
    loadHomeProjects,
    loadHomeReviews,
    loadServices,
    loadStages,
} from "@/sanity/utils/loadQuery";
import { BackgroundFiguresMain } from "@/src/components/backgroundImages/BackgroundFiguresMain";
import { HireUsSection } from "@/src/components/CTAs/hireUsSection/HireUsSection";
import { JoinTheTeamSection } from "@/src/components/CTAs/joinTheTeamSection/JoinTheTeamSection";
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
    const [cta, portfolioSection, services, stages, reviews] =
        await Promise.all([
            await loadCTA(props.params.locale),
            await loadHomeProjects(props.params.locale),
            await loadServices(props.params.locale),
            await loadStages(props.params.locale),
            await loadHomeReviews(props.params.locale),
        ]);

    return (
        <>
            <BackgroundFiguresMain />
            <HeroSection />
            <JoinTheTeamSection data={cta?.ctaSectionJoinUs} />
            <PortfolioSection data={portfolioSection} />
            <FeedbackSection data={reviews} />
            <WriteUsSection data={cta?.ctaSectionWriteUs} />
            <ServicesSection data={services} />
            <OurTeamSection />
            <JoinTheTeamSection data={cta?.ctaSectionJoinUs} />
            <StagesSection data={stages} />
            <QaSection />
            <HireUsSection data={cta?.ctaSectionOrder} />
        </>
    );
}
