import { Countdown } from "@/src/components/eventsPage/countdown/Countdown";
import { PastEvents } from "@/src/components/eventsPage/PastEvents";
import { Switchers } from "@/src/components/eventsPage/Switchers";
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
            <Countdown targetDate="2025-04-13T10:00:00+02:00" />
            <PastEvents />
        </div>
    );
}
