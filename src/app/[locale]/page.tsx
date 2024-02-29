import HomeTest from "@/src/components/Home";
import { ServicesSection } from "../../components/sectionServices/ServicesSection";
import { MissionSection } from "@/src/components/mission/MissionSection";
import { OurTeamSection } from "@/src/components/sectionOurTeam/OurTeamSection";

export default function Home() {
    return (
        <div className="pc:ml-[80px]">
            <MissionSection />
            <ServicesSection />
            <OurTeamSection />
            <HomeTest />
        </div>
    );
}
