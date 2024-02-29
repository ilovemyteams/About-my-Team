import HomeTest from "@/src/components/Home";

import { ServicesSection } from "../../components/sectionServices/ServicesSection";
import { MissionSection } from "@/src/components/mission/MissionSection";
import FeedbackSection from "@/src/components/FeedbackSection/FeedbackSection";
import { OurTeamSection } from "@/src/components/sectionOurTeam/OurTeamSection";
import { StagesSection } from "@/src/components/stagesSection/StagesSection";
export default function Home() {
    return (
        <div className="pc:ml-[80px]">
            <MissionSection />
            <FeedbackSection />
            <ServicesSection />
            <StagesSection />
            <OurTeamSection />
            <HomeTest />
        </div>
    );
}
