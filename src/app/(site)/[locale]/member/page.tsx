import { TeamPage } from "@/src/components/teamPage/TeamPage";
import { generatePageMetadata } from "@/src/utils/generateMetaData";
import { RouteSearchParams } from "@/types/RoutesType";

export async function generateMetadata() {
    return generatePageMetadata({
        namespace: "MemberPage",
        canonical: "/member",
    });
}

export default async function Members({
    searchParams,
}: {
    searchParams: RouteSearchParams;
}) {
    const { page, categoryName } = await searchParams;
    return <TeamPage searchParams={{ page, categoryName }} />;
}
