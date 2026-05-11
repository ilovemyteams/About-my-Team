import { useTranslations } from "next-intl";

import { IconBag } from "@/src/components/shared/Icons/IconBag";
import { IconClock } from "@/src/components/shared/Icons/IconClock";
import { IconRate } from "@/src/components/shared/Icons/IconRate";
import { getMemberExperience } from "@/src/utils/getMemberExperience";

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

    return (
        <ul className="w-full grid grid-cols-2 grid-row-2 gap-2 ">
            <li className="flex gap-1 items-center ">
                <IconClock className="size-[16px] text-purple-130 dark:text-purple-100 shrink-0" />
                <p className="text-sm tab:text-base text-nowrap">
                    {t("statExperience", {
                        experience: getMemberExperience(careerStart),
                    })}
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
