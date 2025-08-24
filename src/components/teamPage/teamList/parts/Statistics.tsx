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
        <ul className="w-full grid grid-cols-2 grid-row-2 gap-2 ">
            {pricePerHour && (
                <li className="flex gap-1 items-center">
                    <IconRate className="size-[16px] text-purple-130 dark:text-purple-100" />
                    <p className="text-sm tab:text-base">${pricePerHour}/год</p>
                </li>
            )}
            <li className="flex gap-1 items-center even:justify-end tab:even:justify-start">
                <IconClock className="size-[16px] text-purple-130 dark:text-purple-100" />
                <p className="text-sm tab:text-base">5р досвід</p>
            </li>
            <li className="flex gap-1 items-center  even:justify-end tab:even:justify-start">
                <IconBag className="size-[16px] text-purple-130 dark:text-purple-100" />
                <p className="text-sm tab:text-base">
                    {projectsCount} проєктів
                </p>
            </li>
            <li className="hidden tab:block tab:min-h-[20px]" aria-hidden></li>
        </ul>
    );
};
