import { PastEvents } from "@/src/components/eventsPage/PastEvents";
import { generatePageMetadata } from "@/src/utils/generateMetaData";

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    return generatePageMetadata({
        locale,
        namespace: "Christmas",
        canonical: "/events",
    });
}

export default function Services() {
    return (
        <>
            <PastEvents />
        </>
    );
}
