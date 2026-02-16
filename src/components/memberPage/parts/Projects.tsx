import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { addProtocol, removeProtocol } from "@/src/utils/httpsProtocols";

import { Title } from "../shared/Title";

interface ProjectsProps {
    projectsExperience: string[];
}

export const Projects = async ({ projectsExperience }: ProjectsProps) => {
    if (!projectsExperience?.length) return null;

    const t = await getTranslations("MemberPage");

    return (
        <section>
            <Title>{t("projects")}</Title>
            <ul className="grid grid-cols-1 gap-2 desk:gap-3 p-4 tab:px-0 pc:px-4">
                {projectsExperience.map(project => {
                    return (
                        <li
                            key={project}
                            className="text-sm pc:text-base desk:text-[18px] font-normal"
                        >
                            <Link
                                href={addProtocol(project)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                    block max-w-min underline outline-none
                                    hover:text-redLight hover:dark:text-red
                                    focus:text-redLight focus:dark:text-red truncate
                                `}
                            >
                                {removeProtocol(project)}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
