import HomeTest from "@/src/components/Home";
import { ServicesSection } from "../../components/services/ServicesSection";
import { MissionSection } from "@/src/components/mission/MissionSection";
import { SectionOurTeam } from "@/src/components/sectionOurTeam/SectionOurTeam";

export default function Home() {
    return (
        <main className="">
            {/*TO:DO basic styles for the side bar */}
            <div className="fixed top-0 left-0 w-[80px] h-[100vh] bg-purple-100 flex flex-col justify-between">
                <p>top</p>
                <p>center</p>
                <p>botton</p>
            </div>
            <div className="ml-[80px]">
                <MissionSection />
                <ServicesSection />
                <SectionOurTeam />
                <HomeTest />
            </div>
        </main>
    );
}
