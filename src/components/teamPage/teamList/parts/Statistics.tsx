import { useTranslations } from "next-intl";

import { IconBag } from "@/src/components/shared/Icons/IconBag";
import { IconClock } from "@/src/components/shared/Icons/IconClock";
import { IconRate } from "@/src/components/shared/Icons/IconRate";

interface StatisticsProps {
    pricePerHour?: string;
    projectsCount: number;
}

export const Statistics = ({
    projectsCount,
    pricePerHour,
}: StatisticsProps) => {
    const t = useTranslations("MemberPage");
    return (
        <ul className="w-full grid grid-cols-2 grid-row-2 gap-2 ">
            {pricePerHour && (
                <li className="flex gap-1 items-center">
                    <IconRate className="size-[16px] text-purple-130 dark:text-purple-100" />
                    <p className="text-sm tab:text-base">
                        {t("statRate", { rate: pricePerHour })}
                    </p>
                </li>
            )}
            <li className="flex gap-1 items-center even:justify-end tab:even:justify-start">
                <IconClock className="size-[16px] text-purple-130 dark:text-purple-100" />
                <p className="text-sm tab:text-base">
                    {t("statExperience", { experience: 5 })}
                </p>
            </li>
            <li className="flex gap-1 items-center  even:justify-end tab:even:justify-start">
                <IconBag className="size-[16px] text-purple-130 dark:text-purple-100" />
                <p className="text-sm tab:text-base">
                    {t("statProjects", { projects: projectsCount })}
                </p>
            </li>
            <li className="hidden tab:block tab:min-h-[20px]" aria-hidden></li>
        </ul>
    );
};
