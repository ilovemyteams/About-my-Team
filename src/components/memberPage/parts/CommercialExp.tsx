import { getTranslations } from "next-intl/server";

import { getMemberDomainList } from "@/src/utils/getMemberDomainList";
import { getMemberExperience } from "@/src/utils/getMemberExperience";

interface CommercialExperienceProps {
    commercialExperience: string;
    projectId: string[];
}

import { Title } from "./shared/Title";

export const CommercialExp = async ({
    commercialExperience,
    projectId,
}: CommercialExperienceProps) => {
    const t = await getTranslations("MemberPage");
    const domainList = getMemberDomainList({ projectId });

    return (
        <section className="pb-4">
            <div className="flex justify-between items-center">
                <Title>{t("commercialExp")}</Title>
                <span className="text-purple-130 dark:text-purple-50 text-sm font-normal desk:text-base">
                    {t("date", {
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
