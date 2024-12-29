import { BackgroundFiguresMain } from "@/src/components/backgroundImages/BackgroundFiguresMain";
import { FeedbackSection } from "@/src/components/feedbackSection/FeedbackSection";
import { HeroSection } from "@/src/components/heroSection/HeroSection";
import { MissionSection } from "@/src/components/missionSection/MissionSection";
import { OurTeamSection } from "@/src/components/ourTeamSection/OurTeamSection";
import { PortfolioSection } from "@/src/components/portfolioSection/PortfolioSection";
import { QaSection } from "@/src/components/qAsection/QaSection";
import { ServicesSection } from "@/src/components/servicesSection/ServicesSection";
import { StagesSection } from "@/src/components/stagesSection/StagesSection";
import { WriteUsSection } from "@/src/components/writeUsSection/WriteUsSection";

export default function Home() {
    return (
        <>
            <BackgroundFiguresMain />
            <HeroSection />
            <MissionSection />
            <PortfolioSection />
            <FeedbackSection />
            <WriteUsSection text="titleIWant" />
            <ServicesSection />
            <OurTeamSection />
            <StagesSection />
            <QaSection />
            <WriteUsSection text="titleAreYouReady" />
        </>
    );
}
