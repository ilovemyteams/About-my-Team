import HomeTest from "@/src/components/Home";
import { ServicesSection } from "../../components/services/ServicesSection";
import { MissionSection } from "@/src/components/mission/MissionSection";
import { Container } from "@/src/components/shared/Container";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col justify-between">
            <Container>
                <MissionSection />
                <ServicesSection />
                <HomeTest />
            </Container>
        </main>
    );
}
