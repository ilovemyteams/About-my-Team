import { AllProjectsMainPart } from "@/src/components/allProjectsPage/AllProjectsMainPart";
import { FilterProvider } from "@/src/components/allProjectsPage/FilterContext";
import { Header } from "@/src/components/allProjectsPage/Header";
import { generatePageMetadata } from "@/src/utils/generateMetaData";

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    return generatePageMetadata({
        locale,
        namespace: "PortfolioPageAllProjects",
        canonical: "/portfolio",
    });
}

export default function Portfolio() {
    return (
        <FilterProvider>
            <Header />
            <AllProjectsMainPart />
        </FilterProvider>
    );
}
