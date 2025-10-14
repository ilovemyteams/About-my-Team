// import { Countdown } from "@/src/components/eventsPage/countdown/Countdown";
import { HeaderEvents } from "@/src/components/eventsPage/HeaderEvents";
import { PastEvents } from "@/src/components/eventsPage/PastEvents";
import { generatePageMetadata } from "@/src/utils/generateMetaData";

export async function generateMetadata() {
    return generatePageMetadata({
        namespace: "EventsPage",
        canonical: "/events",
    });
}

export default function Services() {
    return (
        <>
            <HeaderEvents />
            <div className="relative">
                {/* <Countdown targetDate="2025-04-13T10:00:00+02:00" /> */}
                <PastEvents />
            </div>
        </>
    );
}
