import {
    loadCTA,
    loadHomeAboutUs,
    loadHomeFaq,
    loadHomeHero,
    loadHomeProjects,
    loadServices,
    loadStages,
} from "@/sanity/utils/loadQuery";
import { BackgroundFiguresMain } from "@/src/components/backgroundImages/BackgroundFiguresMain";
import { FeedbackSection } from "@/src/components/feedbackSection/FeedbackSection";
import { HeroSection } from "@/src/components/heroSection/HeroSection";
import { HireUsSection } from "@/src/components/hireUsSection/HireUsSection";
import { JoinTheTeamSection } from "@/src/components/joinTheTeamSection/JoinTheTeamSection";
import { MissionSection } from "@/src/components/missionSection/MissionSection";
import { OurTeamSection } from "@/src/components/ourTeamSection/OurTeamSection";
import { PortfolioSection } from "@/src/components/portfolioSection/PortfolioSection";
import { QaSection } from "@/src/components/qAsection/QaSection";
import { ServicesSection } from "@/src/components/servicesSection/ServicesSection";
import { StagesSection } from "@/src/components/stagesSection/StagesSection";
import { WriteUsSection } from "@/src/components/writeUsSection/WriteUsSection";
import { PageParamsProps } from "@/types/sanityDataPropsTypes";

export default async function HomePage(props: PageParamsProps) {
    const [hero, about, cta, portfolioSection, services, stages, faq] =
        await Promise.all([
            await loadHomeHero(props.params.locale),
            await loadHomeAboutUs(props.params.locale),
            await loadCTA(props.params.locale),
            await loadHomeProjects(props.params.locale),
            await loadServices(props.params.locale),
            await loadStages(props.params.locale),
            await loadHomeFaq(props.params.locale),
        ]);

    return (
        <>
            <BackgroundFiguresMain />
            <HeroSection data={hero.data} />
            <MissionSection data={about.data} />
            <JoinTheTeamSection data={cta.data} />
            <PortfolioSection data={portfolioSection.data} />
            <FeedbackSection />
            <WriteUsSection data={cta.data} />
            <ServicesSection data={services.data} />
            <OurTeamSection />
            <JoinTheTeamSection data={cta.data} />
            <StagesSection data={stages.data} />
            <QaSection data={faq.data} />
            <HireUsSection data={cta.data} />
        </>
    );
}
