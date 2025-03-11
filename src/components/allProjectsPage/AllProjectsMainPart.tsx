"use client";
import { useSearchParams } from "next/navigation";

import {
    allProjectsData,
    projectCategories,
} from "@/src/mockedData/allProjectsData";

import { PageSection } from "../shared/PageSection";
import { ProjectCard } from "./ProjectCard";

export const AllProjectsMainPart = () => {
    const searchParams = useSearchParams();
    const selectedCategory =
        searchParams.get("category") || projectCategories.ALL_PROJECTS;

    const filteredProjects =
        selectedCategory === projectCategories.ALL_PROJECTS
            ? allProjectsData
            : allProjectsData.filter(
                  item => item.data.category === selectedCategory
              );

    return (
        <PageSection className="mb-[80px] tab:mb-[100px] desk:mb-[120px] items-center pc:pb-[60px]">
            <ul className="tab:grid flex-[0_0_100%] w-full tab:grid-cols-2 tab:gap-10 pc:gap-[60px] desk:gap-10">
                {filteredProjects.map(item => (
                    <li
                        key={item.data.id}
                        className="mb-6 tab:mb-10 pc:mb-[60px] desk:mb-10"
                    >
                        <ProjectCard data={item} />
                    </li>
                ))}
            </ul>
        </PageSection>
    );
};
