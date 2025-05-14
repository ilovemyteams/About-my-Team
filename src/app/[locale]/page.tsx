import { BackgroundFiguresMain } from "@/src/components/backgroundImages/BackgroundFiguresMain";
import { WriteUsSection } from "@/src/components/CTAs/writeUsSection/WriteUsSection";
import { FeedbackSection } from "@/src/components/mainPage/feedbackSection/FeedbackSection";
import { HeroSection } from "@/src/components/mainPage/heroSection/HeroSection";
import { OurTeamSection } from "@/src/components/mainPage/ourTeamSection/OurTeamSection";
import { PortfolioSection } from "@/src/components/mainPage/portfolioSection/PortfolioSection";
import { QaSection } from "@/src/components/mainPage/qAsection/QaSection";
import { ReleaseSection } from "@/src/components/mainPage/releaseSection/ReleaseSection";
import { ServicesSection } from "@/src/components/mainPage/servicesSection/ServicesSection";
import { StagesSection } from "@/src/components/mainPage/stagesSection/StagesSection";

export default function Home() {
    return (
        <>
            <BackgroundFiguresMain />
            <HeroSection />
            <PortfolioSection />
            <ServicesSection />
            <FeedbackSection />
            <WriteUsSection text="titleIWant" eventGTM="order_form_start" />
            <StagesSection />
            <OurTeamSection />
            <QaSection />
            <WriteUsSection
                text="titleAreYouReady"
                eventGTM="order_form_start"
            />
            <ReleaseSection />
        </>
    );
}
