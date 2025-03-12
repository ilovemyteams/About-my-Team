import { AllProjectsMainPart } from "@/src/components/allProjectsPage/AllProjectsMainPart";
import { Header } from "@/src/components/allProjectsPage/Header";
import { WriteUsSection } from "@/src/components/writeUsSection/WriteUsSection";
import { generatePageMetadata } from "@/src/utils/generateMetaData";

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    return generatePageMetadata({
        locale,
        namespace: "PortfolioPage",
        canonical: "/portfolio",
    });
}

export default function Portfolio({
    searchParams,
}: {
    searchParams: { page?: string };
}) {
    return (
        <>
            <Header />
            <AllProjectsMainPart searchParams={searchParams} />
            <WriteUsSection text="titleIWant" />
        </>
    );
}
