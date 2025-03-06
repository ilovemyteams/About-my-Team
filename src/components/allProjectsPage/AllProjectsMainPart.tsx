import { usePaginationData } from "@/src/hooks/usePaginationData";
import { allProjectsData } from "@/src/mockedData/allProjectsData";

import { PageSection } from "../shared/PageSection";
import { Pagination } from "../shared/Pagination";
import { FilterAllProjects } from "./FilterAllProjects";
import { ProjectCard } from "./ProjectCard";
import { ProjectStub } from "./ProjectStub";

interface AllProjectsMainPartProps {
    searchParams: { page?: string };
}

const ITEMS_PER_PAGE = 6;

export const AllProjectsMainPart = ({
    searchParams,
}: AllProjectsMainPartProps) => {
    const pageNumber = searchParams?.page ? parseInt(searchParams.page) : 1;
    const {
        dataSlice: portfolios,
        totalPages,
        isPaginationNeeded,
    } = usePaginationData(allProjectsData, ITEMS_PER_PAGE, pageNumber);

    console.log(JSON.stringify(searchParams), ">>num");

    return (
        <PageSection className="mb-[80px] tab:mb-[100px] desk:mb-[120px] items-center pc:pb-[60px]">
            <FilterAllProjects />
            <ul className="tab:grid flex-[0_0_100%] w-full tab:grid-cols-2 tab:gap-10 pc:gap-[60px] desk:gap-10">
                {portfolios.map(item => (
                    <li
                        key={item.data.id}
                        className="mb-6 tab:mb-10 pc:mb-[60px] desk:mb-10"
                    >
                        <ProjectCard data={item} />
                    </li>
                ))}
                {portfolios.length < 6 && (
                    <li
                        key={`${allProjectsData.length < 10 ? "0" : ""}${allProjectsData.length + 1}`}
                        className="mb-6 tab:mb-10 pc:mb-[60px] desk:mb-10"
                    >
                        <ProjectStub />
                    </li>
                )}
            </ul>

            {isPaginationNeeded && (
                // It is not real NextUI pagination component
                <Pagination total={totalPages} currentPage={pageNumber} />
            )}
        </PageSection>
    );
};
