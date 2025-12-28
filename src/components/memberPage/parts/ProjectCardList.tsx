import { getTranslations } from "next-intl/server";

import { portfolioData } from "@/src/mockedData/portfolioData";
import { Project } from "@/types/Projects";
import { Tools } from "@/types/Tools";

import { ProjectCard } from "./ProjectCard";
import { TitleBig } from "./shared/TitleBig";
interface ProjectCardlistProps {
    id: string;
    projects: Project[];
    tools: Tools[];
    position: string;
}

const portfolioDataMap = Object.fromEntries(
    portfolioData.map(p => [p.data.slug, p])
);

export const ProjectCardList = async ({
    id,
    projects,
    tools,
    position,
}: ProjectCardlistProps) => {
    const toolsList = tools.map(i => i.name);
    const t = await getTranslations("MemberPage");

    const MemberProjects = projects.map(memberData => ({
        portfolioData: portfolioDataMap[memberData.id],
        memberData,
    }));

    return (
        <section>
            <TitleBig>{t("projects")}</TitleBig>
            <ul className="grid grid-cols-1 pc:grid-cols-2 gap-4">
                {MemberProjects.map(p => (
                    <li key={p.memberData.id}>
                        <ProjectCard
                            id={id}
                            memberProject={p}
                            tools={toolsList}
                            position={position}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};
