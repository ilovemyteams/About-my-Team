import { AllProjectsMainPart } from "@/src/components/allProjectsPage/AllProjectsMainPart";
import { Header } from "@/src/components/allProjectsPage/Header";
import { WriteUsSection } from "@/src/components/CTAs/writeUsSection/WriteUsSection";
import { generatePageMetadata } from "@/src/utils/generateMetaData";

export async function generateMetadata() {
    return generatePageMetadata({
        namespace: "PortfolioPage",
        canonical: "/portfolio",
    });
}

export default async function Portfolio({
    searchParams,
}: {
    searchParams: { page?: string; category?: string };
}) {
    const { page, category } = await searchParams;
    return (
        <>
            <Header selectedCategory={category || "AllProjects"} />
            <AllProjectsMainPart searchParams={{ page, category }} />
            <WriteUsSection text="titleIWant" eventGTM="order_form_portfolio" />
        </>
    );
}
