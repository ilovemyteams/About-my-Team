import { useTranslations } from "next-intl";

import { DeadlineType } from "@/src/mockedData/portfolioData";
import { defineServiceIcon } from "@/src/utils/defineServiceIcon";

interface DeadlineProps {
    deadlines: DeadlineType;
}

export const Deadlines = ({ deadlines }: DeadlineProps) => {
    const getTranslations = useTranslations("SomeProjectPage");
    const deadlineArray = Object.entries(deadlines);

    return (
        <ul className="flex flex-col gap-3">
            {deadlineArray.map((item, index) => {
                const Icon = defineServiceIcon(item[0]);
                const title = getTranslations(item[0]) || "";

                return (
                    <li key={index} className="flex gap-2 items-center">
                        <Icon className="text-purple-100 h-[32px] w-[32px]" />
                        <p className="flex gap-1 items-center">
                            <span className="font-caviar font-bold dark:text-white">
                                {title}:
                            </span>
                            <span className="text-sm20"> {item[1]}</span>
                        </p>
                    </li>
                );
            })}
        </ul>
    );
};
