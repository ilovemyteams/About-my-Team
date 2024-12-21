import { ChristmasPage } from "@/src/components/christmas/ChristmasPage";
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
    return <ChristmasPage />;
}
