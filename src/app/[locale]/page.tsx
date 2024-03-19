// import HomeTest from "@/src/components/Home";
import { HeroSection } from "@/src/components/heroSection/HeroSection";
import { HireUsSection } from "@/src/components/hireUsSection/HireUsSection";
import { JoinTheTeamSection } from "@/src/components/joinTheTeamSection/JoinTheTeamSection";
import { MissionSection } from "@/src/components/missionSection/MissionSection";
import { OurTeamSection } from "@/src/components/ourTeamSection/OurTeamSection";
import { QaSection } from "@/src/components/qAsection/QaSection";
import { PortfolioSection } from "@/src/components/portfolioSection/PortfolioSection";
import { ServicesSection } from "@/src/components/servicesSection/ServicesSection";
import { StagesSection } from "@/src/components/stagesSection/StagesSection";
import { WriteUsSection } from "@/src/components/writeUsSection/WriteUsSection";
import { FeedbackSection } from "@/src/components/feedbackSection/FeedbackSection";

export default function Home() {
    return (
        <div className="mt-[80px] pc:mt-[0px] pc:ml-[80px]">
            <HeroSection />
            <MissionSection />
            <JoinTheTeamSection />
            <PortfolioSection />
            <FeedbackSection />
            <WriteUsSection />
            <ServicesSection />
            <OurTeamSection />
            <JoinTheTeamSection />
            <StagesSection />
            <QaSection />
            <HireUsSection />
            {/* <HomeTest /> */}
        </div>
    );
}
