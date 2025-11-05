import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { portfolioData } from "@/src/mockedData/portfolioData";

interface ProjectsProps {
    projectId: string[];
}

export const Projects = async ({ projectId }: ProjectsProps) => {
    const t = await getTranslations("MemberPage");

    const memberProjects = portfolioData.filter(project =>
        projectId.includes(project.data.slug)
    );

    const title = t("statProjects", { projects: "" }).slice(0, -2);

    return (
        <div>
            <h2 className="font-caviar text-baseb tab:text-lg pc:text-xl desk:text-2xl capitalize">
                {title}
            </h2>
            <ul className="grid grid-cols-1 gap-2 desk:gap-3 p-4">
                {memberProjects.map(({ data }) => {
                    const cleanUrl = data.siteLink?.replace(
                        /^(https?:\/\/)?(www\.)?/,
                        ""
                    );
                    const displayUrl = cleanUrl ? `www.${cleanUrl}` : "";

                    return (
                        <li
                            key={data.id}
                            className="text-sm pc:text-base desk:text-[18px] font-normal"
                        >
                            <Link
                                href={data.siteLink || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block max-w-min underline hover:text-redLight hover:dark:text-red truncate"
                                title={displayUrl}
                            >
                                {displayUrl}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
