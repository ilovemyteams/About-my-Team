import { TeamPage } from "@/src/components/teamPage/TeamPage";
import { generatePageMetadata } from "@/src/utils/generateMetaData";

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    return generatePageMetadata({
        locale,
        namespace: "MemberPage",
        canonical: "/member",
    });
}

export default function Services() {
    return <TeamPage />;
}
