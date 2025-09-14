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
        <ul className="w-full grid grid-cols-2 grid-row-2 gap-2 ">
            <li className="flex gap-1 items-center ">
                <IconClock className="size-[16px] text-purple-130 dark:text-purple-100 shrink-0" />
                <p className="text-sm tab:text-base text-nowrap">
                    {t("statExperience", { experience: experience })}
                </p>
            </li>
            <li className="flex gap-1 items-center  justify-end ">
                <IconBag className="size-[16px] text-purple-130 dark:text-purple-100 shrink-0" />
                <p className="text-sm tab:text-base text-nowrap">
                    {t("statProjects", { projects: projectsCount })}
                </p>
            </li>

            {pricePerHour && (
                <li className="flex gap-1 items-center">
                    <IconRate className="size-[16px] text-purple-130 dark:text-purple-100 shrink-0" />
                    <p className="text-sm tab:text-base">
                        {t("statRate", { rate: pricePerHour })}
                    </p>
                </li>
            )}
            <li className="hidden tab:block tab:min-h-[20px]" aria-hidden></li>
        </ul>
    );
};
