import HomeTest from "@/src/components/Home";
import { useTranslations } from "next-intl";
import { ServicesSection } from "../../components/services/ServicesSection";

export default function Home() {
    const t = useTranslations("Home");
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <ServicesSection />
            <HomeTest />
        </main>
    );
}
