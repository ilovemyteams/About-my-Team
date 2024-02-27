import HomeTest from "@/src/components/Home";
import { ServicesSection } from "../../components/services/ServicesSection";
import { MissionSection } from "@/src/components/mission/MissionSection";

export default function Home() {
    return (
        <main className="max-w-[1920px] pl-[80px] mx-auto">
            <MissionSection />
            <ServicesSection />
            <HomeTest />
        </main>
    );
}
