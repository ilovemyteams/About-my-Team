"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

import { Button } from "@/src/components/shared/Button";
import { buildMemberProjects } from "@/src/utils/buildMemberProjects";
import { Project } from "@/types/Projects";
import { Tool } from "@/types/Tools";

import { TitleBig } from "../shared/TitleBig";
import { ProjectCard } from "./ProjectCard";

interface ProjectCardListProps {
    id: string;
    projects: Project[];
    tools: Tool[];
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

    const initialItems = memberProjects.slice(0, INITIAL_VISIBLE);
    const extraItems = memberProjects.slice(INITIAL_VISIBLE);

    const handleToggle = () => {
        setShowAll(prev => !prev);

        if (!showAll) return;

        if (extraItems.length > 2)
            requestAnimationFrame(() => {
                anchorRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            });
    };

    return (
        <section ref={anchorRef}>
            <TitleBig>{tMember("projects")}</TitleBig>
            <motion.ul className="grid grid-cols-1 pc:grid-cols-2 gap-4">
                {initialItems.map(p => (
                    <li key={p.memberData.id}>
                        <ProjectCard
                            id={id}
                            memberProject={p}
                            tools={toolNames}
                            position={position}
                        />
                    </li>
                ))}
                <AnimatePresence>
                    {showAll &&
                        extraItems.map((p, index) => (
                            <motion.li
                                layout
                                key={p.memberData.id}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: {
                                        duration: 0.3,
                                        delay: 0.1 + index * 0.05,
                                        ease: "easeOut",
                                    },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {
                                        duration: 0.2,
                                        delay:
                                            (extraItems.length - index - 1) *
                                            0.05,
                                        ease: "easeOut",
                                    },
                                }}
                            >
                                <ProjectCard
                                    id={id}
                                    memberProject={p}
                                    tools={toolNames}
                                    position={position}
                                />
                            </motion.li>
                        ))}
                </AnimatePresence>
            </motion.ul>

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
