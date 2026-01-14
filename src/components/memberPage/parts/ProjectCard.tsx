import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { IconGoToSite } from "@/src/components/shared/Icons/IconGoToSite";
import { ImageFromCloud } from "@/src/components/shared/ImageFromCloud";
import { PortfolioDataItemType } from "@/src/mockedData/portfolioData";
import { LocaleType } from "@/types/LocaleType";
import { Project } from "@/types/Projects";

import { OtherMembers } from "./OtherMembers";

type MemberProject = {
    portfolioData: PortfolioDataItemType;
    memberData: Project;
};

interface ProjectCardProps {
    id: string;
    memberProject: MemberProject;
    tools: string[];
    position: string;
}

export const ProjectCard = ({
    id,
    memberProject,
    tools,
    position,
}: ProjectCardProps) => {
    const t = useTranslations("MemberPage");
    const locale = useLocale();
    const langData = memberProject.portfolioData[locale as LocaleType];
    const { name, description } = langData;
    const {
        startDate,
        endDate,
        role = position,
        skills = tools,
    } = memberProject.memberData;
    const { image, domains, siteLink, slug } = memberProject.portfolioData.data;

    return (
        <div className="relative border-y text-sm font-normal desk:text-base border-purple-strokeLight dark:border-purple-stroke tab:border">
            <Link
                href={`/portfolio/${slug}`}
                className=" grid grid-cols-1 grid-rows-[repeat(3,auto)_1fr] gap-4 h-full py-3 tab:p-3"
            >
                <div className="grid grid-cols-[auto_1fr] gap-4">
                    <ImageFromCloud
                        src={image}
                        alt={name}
                        width={133}
                        height={68}
                        loading="lazy"
                        className="w-[133px] h-[68px] object-fill"
                    />
                    <div className="flex flex-col justify-end gap-1">
                        <p className="text-redLight dark:text-red">{name}</p>
                        {startDate && (
                            <p className="text-purple-130 dark:text-purple-50">
                                <span>{startDate}</span>
                                <span>
                                    {endDate
                                        ? ` - ${endDate}`
                                        : ` - ${t("untilNow")}`}
                                </span>
                            </p>
                        )}
                    </div>
                </div>
                <p className="pc:line-clamp-4" title={description}>
                    {description}
                </p>
                <div className="grid grid-cols-[auto_1fr] grid-rows-[repeat(auto)_1fr] gap-y-4 gap-x-4 text-white">
                    {role && (
                        <>
                            <p className="text-xs desk:text-sm">{t("role")}</p>
                            <p className="font-bold">{role}</p>
                        </>
                    )}
                    {skills && (
                        <>
                            <p className="text-xs desk:text-sm">
                                {t("skills")}
                            </p>
                            <ul className="flex flex-wrap gap-2 pc:max-h-[50px] desk:max-h-14 overflow-hidden">
                                {skills.map(i => (
                                    <li
                                        key={i}
                                        className="px-2 py-[1px] border border-purple-strokeLight dark:border-purple-stroke"
                                    >
                                        {i}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    <p className="text-xs desk:text-sm">{t("domain")}</p>
                    <p className="max-h-[18px] overflow-hidden text-purple-130 dark:text-purple-50">
                        {domains
                            .map(i => `#${i}`)
                            .join(" ")
                            .toLowerCase()}
                    </p>
                </div>
                <OtherMembers slug={slug} id={id} />
            </Link>

            {siteLink && (
                <Link
                    href={siteLink}
                    target="_blank"
                    className="absolute top-3 right-3"
                >
                    <IconGoToSite className="text-purple-130 dark:text-purple-50 hover:text-redLight dark:hover:text-red transition-text duration-300 ease-in-out" />
                </Link>
            )}
        </div>
    );
};
