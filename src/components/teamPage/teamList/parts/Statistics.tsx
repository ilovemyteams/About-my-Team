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
    return (
        <ul className="flex flex-wrap justify-between gap-x-6 gap-y-2 tab:w-full tab:grid tab:grid-cols-2 tab:gap-2 pc:gap-x-[12px]">
            <li className="flex gap-1 items-center">
                <IconRate className="size-[16px] text-purple-130 dark:text-purple-100" />
                <p className="text-sm tab:text-base">${pricePerHour}/год</p>
            </li>
            <li className="flex gap-1 items-center">
                <IconClock className="size-[16px] text-purple-130 dark:text-purple-100" />
                <p className="text-sm tab:text-base">5р досвід</p>
            </li>
            <li className="flex gap-1 items-center">
                <IconBag className="size-[16px] text-purple-130 dark:text-purple-100" />
                <p className="text-sm tab:text-base">
                    {projectsCount} проєктів
                </p>
            </li>
        </ul>
    );
};
