import { PastEvents } from "@/src/components/eventsPage/PastEvents";
import { Switchers } from "@/src/components/eventsPage/Switchers";
import { Certificate } from "@/src/components/valentines/certificate/Certificate";
import { Hero } from "@/src/components/valentines/hero/Hero";
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
        <>
            <Switchers />
            <Hero />
            <Certificate />
            {/* <Countdown targetDate="2025-02-10T10:00:00+02:00" /> */}
            <PastEvents />
        </>
    );
}
