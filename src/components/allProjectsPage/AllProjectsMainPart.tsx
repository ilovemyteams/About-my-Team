import { usePaginationData } from "@/src/hooks/usePaginationData";
import {
    allProjectsData,
    projectCategories,
} from "@/src/mockedData/allProjectsData";

import { PageSection } from "../shared/PageSection";
import { Pagination } from "../shared/Pagination";
import { FilterAllProjects } from "./FilterAllProjects";
import { ProjectCard } from "./ProjectCard";
import { ProjectStub } from "./ProjectStub";

interface AllProjectsMainPartProps {
    searchParams: { page?: string; category?: string };
}

const ITEMS_PER_PAGE = 6;

export const AllProjectsMainPart = ({
    searchParams,
}: AllProjectsMainPartProps) => {
    const pageNumber = searchParams?.page ? parseInt(searchParams.page) : 1;
    const selectedCategory =
        searchParams?.category || projectCategories.ALL_PROJECTS;

    // Фільтруємо за категорією
    const filteredProjects =
        selectedCategory === projectCategories.ALL_PROJECTS
            ? allProjectsData
            : allProjectsData.filter(
                  item => item.data.category === selectedCategory
              );

    const {
        dataSlice: portfolios,
        totalPages,
        isPaginationNeeded,
    } = usePaginationData(filteredProjects, ITEMS_PER_PAGE, pageNumber);

    return (
        <PageSection className="mb-[80px] tab:mb-[100px] desk:mb-[120px] items-center pc:pb-[60px]">
            <ul className="tab:grid flex-[0_0_100%] w-full tab:grid-cols-2 tab:gap-10 pc:gap-[60px] desk:gap-10">
                {portfolios.map(item => (
                    <li
                        key={item.data.id}
                        className="mb-6 tab:mb-10 pc:mb-[60px] desk:mb-10"
                    >
                        <ProjectCard data={item} />
                    </li>
                ))}
                {portfolios.length > 0 &&
                    portfolios.length < ITEMS_PER_PAGE && (
                        <li
                            key="stub"
                            className="mb-6 tab:mb-10 pc:mb-[60px] desk:mb-10"
                        >
                            <ProjectStub />
                        </li>
                    )}
            </ul>

            {isPaginationNeeded && (
                <Pagination total={totalPages} currentPage={pageNumber} />
            )}
        </PageSection>
    );
};
