import { allProjectsData } from "@/src/mockedData/allProjectsData";

import { PageSection } from "../shared/PageSection";
import { FilterAllProjects } from "./FilterAllProjects";
import { ProjectCard } from "./ProjectCard";

export const AllProjectsMainPart = () => {
    return (
        <PageSection className="mb-[80px] tab:mb-[100px] desk:mb-[120px] items-center pc:pb-[60px]">
            <FilterAllProjects />
            <ul className="flex flex-col gap-6 tab:grid flex-[0_0_100%] w-full tab:grid-cols-2 tab:gap-10 pc:gap-[60px] desk:gap-10">
                {allProjectsData.map(item => (
                    <li key={item.data.id}>
                        <ProjectCard data={item} />
                    </li>
                ))}
            </ul>
        </PageSection>
    );
};
