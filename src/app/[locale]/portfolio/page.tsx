import { AllProjectsMainPart } from "@/src/components/allProjectsPage/AllProjectsMainPart";
import { Header } from "@/src/components/allProjectsPage/Header";
import { projectCategories } from "@/src/mockedData/allProjectsData";
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
            <Header
                selectedCategory={
                    searchParams.category || projectCategories.ALL_PROJECTS
                }
            />
            <AllProjectsMainPart searchParams={searchParams} />
        </>
    );
}
