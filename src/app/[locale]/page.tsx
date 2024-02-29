import HomeTest from "@/src/components/Home";
import { JoinTheTeamSection } from "@/src/components/joinTheTeamSection/joinTheTeamSection";
import { MissionSection } from "@/src/components/missionSection/MissionSection";
import { OurTeamSection } from "@/src/components/ourTeamSection/OurTeamSection";
import { ServicesSection } from "@/src/components/servicesSection/ServicesSection";
import { StagesSection } from "@/src/components/stagesSection/StagesSection";

export default function Home() {
    return (
        <div className="pc:ml-[80px]">
            <MissionSection />
            <JoinTheTeamSection />
            <ServicesSection />
            <StagesSection />
            <OurTeamSection />
            <HomeTest />
        </div>
    );
}
