import { getTranslations } from "next-intl/server";

import { getMemberDomainList } from "@/src/utils/getMemberDomainList";
import { getMemberExperience } from "@/src/utils/getMemberExperience";
import { Project } from "@/types/Projects";

interface CommercialExperienceProps {
    commercialExperience: string;
    projects: Project[];
}

import { Title } from "../shared/Title";

export const CommercialExp = async ({
    commercialExperience,
    projects,
}: CommercialExperienceProps) => {
    const t = await getTranslations("MemberPage");
    const domainList = getMemberDomainList({ projects });

    return (
        <section className="pb-4">
            <div className="flex justify-between items-center">
                <Title>{t("commercialExp")}</Title>
                <span className="text-purple-130 dark:text-purple-50 text-sm font-normal desk:text-base">
                    {t("year", {
                        experience: getMemberExperience(commercialExperience),
                    })}
                </span>
            </div>
            {domainList && (
                <p
                    className={`
                        p-4 pb-0 text-sm font-normal [word-spacing:8px] text-purple-130 dark:text-purple-50
                        tab:px-0
                        pc:px-4 pc:text-base
                        desk:text-[18px]
                    `}
                >
                    {domainList}
                </p>
            )}
        </section>
    );
};
