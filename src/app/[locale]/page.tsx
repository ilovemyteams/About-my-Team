import {
    loadCTA,
    loadHomePage,
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
import { HomePageParamsProps } from "@/types/sanityDataPropsTypes";

export default async function HomePage(props: HomePageParamsProps) {
    const [initial, cta, portfolioSection, services, stages] =
        await Promise.all([
            await loadHomePage(props.params.locale),
            await loadCTA(props.params.locale),
            await loadHomeProjects(props.params.locale),
            await loadServices(props.params.locale),
            await loadStages(props.params.locale),
        ]);

    return (
        <>
            <BackgroundFiguresMain />
            <HeroSection data={initial.data} />
            <MissionSection />
            <JoinTheTeamSection data={cta.data} />
            <PortfolioSection data={portfolioSection.data} />
            <FeedbackSection />
            <WriteUsSection data={cta.data} />
            <ServicesSection data={services.data} />
            <OurTeamSection />
            <JoinTheTeamSection data={cta.data} />
            <StagesSection data={stages.data} />
            <QaSection />
            <HireUsSection data={cta.data} />
        </>
    );
}
