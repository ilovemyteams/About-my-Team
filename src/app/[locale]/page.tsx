import HomeTest from "@/src/components/Home";
import { JoinTheTeamSection } from "@/src/components/joinTheTeamSection/JoinTheTeamSection";
import { MissionSection } from "@/src/components/missionSection/MissionSection";
import FeedbackSection from "@/src/components/FeedbackSection/FeedbackSection";
import { OurTeamSection } from "@/src/components/ourTeamSection/OurTeamSection";
import { ServicesSection } from "@/src/components/servicesSection/ServicesSection";
import { StagesSection } from "@/src/components/stagesSection/StagesSection";

export default function Home() {
    return (
        <div className="pc:ml-[80px]">
            <MissionSection />
            <JoinTheTeamSection />
            <FeedbackSection />
            <JoinTheTeamSection />
            <ServicesSection />
            <StagesSection />
            <OurTeamSection />
            <HomeTest />
        </div>
    );
}
