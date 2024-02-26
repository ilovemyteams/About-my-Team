import HomeTest from "@/src/components/Home";
import { ServicesSection } from "../../components/services/ServicesSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <ServicesSection />
            <HomeTest />
        </main>
    );
}
