import { loadCTA, loadHomePage, loadProjects } from "@/sanity/utils/loadQuery";
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
import { HomePageParamsProps } from "@/types/pageProps";

export default async function HomePage(props: HomePageParamsProps) {
    const [initial, projects, cta] = await Promise.all([
        loadHomePage(props.params.locale),
        loadProjects(props.params.locale),
        loadCTA(props.params.locale),
    ]);
    console.log(cta.data);

    return (
        <>
            <BackgroundFiguresMain />
            <HeroSection data={initial.data} projects={projects.data} />
            <MissionSection />
            <JoinTheTeamSection data={cta.data} />
            <PortfolioSection />
            <FeedbackSection />
            <WriteUsSection data={cta.data} />
            <ServicesSection />
            <OurTeamSection />
            <JoinTheTeamSection data={cta.data} />
            <StagesSection />
            <QaSection />
            <HireUsSection data={cta.data} />
        </>
    );
}
