import { getLocale, getTranslations } from "next-intl/server";

import { formatMonthName } from "@/src/utils/formatMonthName";
import { getProjectExperience } from "@/src/utils/getProjectExperience";

interface ProjectExperienceProps {
    startDate: string;
    endDate?: string;
}

export const ProjectExperience = async ({
    startDate,
    endDate,
}: ProjectExperienceProps) => {
    const t = await getTranslations("MemberPage");
    const locale = await getLocale();
    const experience = await getProjectExperience(startDate, endDate);

    return (
        <p className="mb-3 text-xs tab:text-sm tab:mb-4 desk:text-base text-purple-130 dark:text-purple-50 whitespace-pre-wrap">
            <span className="capitalize">
                {formatMonthName(startDate, locale)}
            </span>
            <span className="capitalize">
                {endDate
                    ? ` - ${formatMonthName(endDate, locale)}  `
                    : ` - ${t("untilNow")}  `}
            </span>
            <span>{`•  ${experience}`}</span>
        </p>
    );
};
