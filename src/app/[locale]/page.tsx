import { BackgroundFiguresMain } from "@/src/components/backgroundImages/BackgroundFiguresMain";
import { WriteUsSection } from "@/src/components/CTAs/writeUsSection/WriteUsSection";
import { FeedbackSection } from "@/src/components/mainPage/feedbackSection/FeedbackSection";
import { HeroSection } from "@/src/components/mainPage/heroSection/HeroSection";
import { MissionSection } from "@/src/components/mainPage/missionSection/MissionSection";
import { OurTeamSection } from "@/src/components/mainPage/ourTeamSection/OurTeamSection";
import { PortfolioSection } from "@/src/components/mainPage/portfolioSection/PortfolioSection";
import { QaSection } from "@/src/components/mainPage/qAsection/QaSection";
import { ServicesSection } from "@/src/components/mainPage/servicesSection/ServicesSection";
import { StagesSection } from "@/src/components/mainPage/stagesSection/StagesSection";

export default function Home() {
    return (
        <>
            <BackgroundFiguresMain />
            <HeroSection />
            <MissionSection />
            <PortfolioSection />
            <FeedbackSection />
            <WriteUsSection text="titleIWant" eventGTM="order_form_start" />
            <ServicesSection />
            <OurTeamSection />
            <StagesSection />
            <QaSection />
            <WriteUsSection
                text="titleAreYouReady"
                eventGTM="order_form_start"
            />
        </>
    );
}
