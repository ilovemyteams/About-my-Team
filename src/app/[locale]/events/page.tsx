import { PastEvents } from "@/src/components/eventsPage/PastEvents";
import { SecondScene } from "@/src/components/eventsPage/SecondScene.tsx/SecondScene";
import { Switchers } from "@/src/components/eventsPage/Switchers";
import { Certificate } from "@/src/components/eventsPage/valentines/certificate/Certificate";
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
            <Certificate />
            {/* <Countdown targetDate="2025-02-10T10:00:00+02:00" /> */}
            <SecondScene />
            <PastEvents />
        </div>
    );
}
