import { useTranslations } from "next-intl";

import { IconBag } from "@/src/components/shared/Icons/IconBag";
import { IconClock } from "@/src/components/shared/Icons/IconClock";
import { IconRate } from "@/src/components/shared/Icons/IconRate";

interface StatisticsProps {
    pricePerHour?: string;
    projectsCount: number;
    careerStart: string;
}

export const Statistics = ({
    projectsCount,
    pricePerHour,
    careerStart,
}: StatisticsProps) => {
    const t = useTranslations("MemberPage");

    const startDate = careerStart.split("-");
    const startYear = startDate[0]
        ? Number(startDate[0])
        : new Date().getFullYear();
    const startMonth = startDate[1]
        ? Number(startDate[1])
        : new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    const diffMonth =
        ((currentYear - startYear) * 12 + (currentMonth - startMonth)) / 12;

    const experience =
        diffMonth > 2
            ? Math.round(diffMonth)
            : diffMonth > 1.5
              ? 1.5
              : diffMonth < 1
                ? 0.5
                : 1;

    return (
        <ul
            className={`
                flex items-center justify-between py-4 border-y border-purple-strokeLight dark:border-purple-stroke
                tab:flex-col tab:items-start tab:gap-2`}
        >
            {pricePerHour && (
                <li className="flex items-center gap-1">
                    <IconRate className="size-4 tab:size-5 pc:size-6 desk:size-7 text-purple-100" />
                    <p className="text-sm pc:text-base desk:text-[18px] text-greyLight dark:text-grey">
                        {t("statRate", { rate: pricePerHour })}
                    </p>
                </li>
            )}
            <li className="flex items-center gap-1">
                <IconClock className="size-4 tab:size-5 pc:size-6 desk:size-7 text-purple-100 " />
                <p className="text-sm pc:text-base desk:text-[18px] text-greyLight dark:text-grey">
                    {t("statExperience", { experience: experience })}
                </p>
            </li>
            <li className="flex items-center gap-1">
                <IconBag className="size-4 tab:size-5 pc:size-6 desk:size-7 text-purple-100 " />
                <p className="text-sm pc:text-base desk:text-[18px] text-greyLight dark:text-grey">
                    {t("statProjects", { projects: projectsCount })}
                </p>
            </li>
        </ul>
    );
};
