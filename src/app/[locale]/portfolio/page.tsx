import { AllProjectsMainPart } from "@/src/components/allProjectsPage/AllProjectsMainPart";
import { Header } from "@/src/components/allProjectsPage/Header";
import { WriteUsSection } from "@/src/components/CTAs/writeUsSection/WriteUsSection";
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
    searchParams: { page?: string; category?: string };
}) {
    return (
        <>
            <Header selectedCategory={searchParams.category || "AllProjects"} />
            <AllProjectsMainPart searchParams={searchParams} />
            <WriteUsSection text="titleIWant" eventGTM="order_form_portfolio" />
        </>
    );
}
