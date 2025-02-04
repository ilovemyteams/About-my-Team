import { PastEvents } from "@/src/components/eventsPage/PastEvents";
import { SecondScene } from "@/src/components/eventsPage/SecondScene.tsx/SecondScene";
import { Switchers } from "@/src/components/eventsPage/Switchers";
import { generatePageMetadata } from "@/src/utils/generateMetaData";

import { Countdown } from "../../../components/eventsPage/countdown/Countdown";

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
            {/* <Header/> */}
            <Switchers />
            <Countdown targetDate="2025-02-10T10:00:00+02:00" />
            <SecondScene />
            <PastEvents />
        </>
    );
}
