import HomeTest from "@/src/components/Home";
import { ServicesSection } from "../../components/services/ServicesSection";
import { MissionSection } from "@/src/components/mission/MissionSection";

export default function Home() {
    return (
        <div className="ml-[80px]">
            <MissionSection />
            <ServicesSection />
            <HomeTest />
        </div>
    );
}
