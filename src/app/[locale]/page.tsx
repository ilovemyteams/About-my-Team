import HomeTest from "@/src/components/Home";
import FeedbackSection from "@/src/components/feedbackSection/FeedbackSection";
import { HeroSection } from "@/src/components/heroSection/HeroSection";
import { HireUsSection } from "@/src/components/hireUsSection/HireUsSection";
import { JoinTheTeamSection } from "@/src/components/joinTheTeamSection/JoinTheTeamSection";
import { MissionSection } from "@/src/components/missionSection/MissionSection";
import { OurTeamSection } from "@/src/components/ourTeamSection/OurTeamSection";
import { QaSection } from "@/src/components/qAsection/QaSection";
import { ServicesSection } from "@/src/components/servicesSection/ServicesSection";
import { StagesSection } from "@/src/components/stagesSection/StagesSection";
import { WriteUsSection } from "@/src/components/writeUsSection/WriteUsSection";

export default function Home() {
    return (
        <div className="pc:ml-[80px] h-[100vh] overflow-y-auto">
            <HeroSection />
            <MissionSection />
            <JoinTheTeamSection />
            <FeedbackSection />
            <WriteUsSection />
            <ServicesSection />
            <JoinTheTeamSection />
            <StagesSection />
            <OurTeamSection />
            <QaSection />
            <HireUsSection />
            <HomeTest />
        </div>
    );
}
