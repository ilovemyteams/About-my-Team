"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

import { Button } from "@/src/components/shared/Button";
import { buildMemberProjects } from "@/src/utils/buildMemberProjects";
import { Project } from "@/types/Projects";
import { Tools } from "@/types/Tools";

import { ProjectCard } from "./ProjectCard";
import { TitleBig } from "./shared/TitleBig";

interface ProjectCardListProps {
    id: string;
    projects: Project[];
    tools: Tools[];
    position: string;
}

const INITIAL_VISIBLE = 2;

export const ProjectCardList = ({
    id,
    projects,
    tools,
    position,
}: ProjectCardListProps) => {
    const [showAll, setShowAll] = useState(false);
    const anchorRef = useRef<HTMLDivElement | null>(null);

    const tMember = useTranslations("MemberPage");
    const tButton = useTranslations("Buttons");
    const toolNames = tools.map(i => i.name);
    const memberProjects = buildMemberProjects(projects);

    const visibleProjects = showAll
        ? memberProjects
        : memberProjects.slice(0, INITIAL_VISIBLE);

    const handleToggle = () => {
        setShowAll(prev => !prev);

        if (!showAll) return;

        requestAnimationFrame(() => {
            anchorRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    };

    return (
        <section ref={anchorRef} className="scroll-mt-24 pc:scroll-mt-4">
            <TitleBig>{tMember("projects")}</TitleBig>
            <ul className="grid grid-cols-1 pc:grid-cols-2 gap-4">
                {visibleProjects.map(p => (
                    <li key={p.memberData.id}>
                        <ProjectCard
                            id={id}
                            memberProject={p}
                            tools={toolNames}
                            position={position}
                        />
                    </li>
                ))}
            </ul>

            {projects.length > INITIAL_VISIBLE && (
                <div className="mt-4 flex justify-center">
                    <Button onClick={handleToggle}>
                        {showAll ? tButton("showLess") : tButton("allProjects")}
                    </Button>
                </div>
            )}
        </section>
    );
};
