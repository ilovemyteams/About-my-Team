import HomeTest from "@/src/components/Home";
import { HireUsSection } from "@/src/components/hireUsSection/HireUsSection";
import { JoinTheTeamSection } from "@/src/components/joinTheTeamSection/JoinTheTeamSection";
import { MissionSection } from "@/src/components/missionSection/MissionSection";
import { OurTeamSection } from "@/src/components/ourTeamSection/OurTeamSection";
import { ServicesSection } from "@/src/components/servicesSection/ServicesSection";
import { StagesSection } from "@/src/components/stagesSection/StagesSection";
import { WriteUsSection } from "@/src/components/writeUsSection/WriteUsSection";

export default function Home() {
    return (
        <div className="pc:ml-[80px]">
            <MissionSection />
            <JoinTheTeamSection />
            <WriteUsSection />
            <ServicesSection />
            <StagesSection />
            <HireUsSection />
            <OurTeamSection />
            <HomeTest />
        </div>
    );
}
