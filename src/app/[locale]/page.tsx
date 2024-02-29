import HomeTest from "@/src/components/Home";
import { MissionSection } from "@/src/components/mission/MissionSection";
import { OurTeamSection } from "@/src/components/sectionOurTeam/OurTeamSection";
import { ServicesSection } from "@/src/components/servicesSection/ServicesSection";
import { StagesSection } from "@/src/components/stagesSection/StagesSection";

export default function Home() {
    return (
        <div className="pc:ml-[80px]">
            <MissionSection />
            <ServicesSection />
            <StagesSection />
            <OurTeamSection />
            <HomeTest />
        </div>
    );
}
