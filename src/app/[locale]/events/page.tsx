import { PastEvents } from "@/src/components/eventsPage/PastEvents";
import { Switchers } from "@/src/components/eventsPage/Switchers";
import { ClickCertificateSection } from "@/src/components/eventsPage/valentines/certificate/ClickCertificateSection";
import { Hero } from "@/src/components/eventsPage/valentines/hero/Hero";
import { generatePageMetadata } from "@/src/utils/generateMetaData";

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    return generatePageMetadata({
        locale,
        namespace: "Events",
        canonical: "/events",
    });
}

export default function Services() {
    return (
        <div className="relative">
            <Switchers />
            <Hero />
            <ClickCertificateSection />
            {/* <Countdown targetDate="2025-02-10T10:00:00+02:00" /> */}
            <PastEvents />
        </div>
    );
}
