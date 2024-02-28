import HomeTest from "@/src/components/Home";
import { ServicesSection } from "../../components/services/ServicesSection";
import { MissionSection } from "@/src/components/mission/MissionSection";
import FeedbackSection from "@/src/components/FeedbackSection/FeedbackSection";

export default function Home() {
    return (
        <div className="pc:ml-[80px]">
            <MissionSection />
            <FeedbackSection />
            <ServicesSection />
            <HomeTest />
        </div>
    );
}
