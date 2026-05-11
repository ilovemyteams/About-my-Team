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
        <ul
            className={`
                flex items-center justify-between py-4
                tab:flex-col tab:items-start tab:gap-2
                border-t border-purple-strokeLight dark:border-purple-stroke
                `}
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
                    {t("statExperience", {
                        experience: getMemberExperience(careerStart),
                    })}
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
