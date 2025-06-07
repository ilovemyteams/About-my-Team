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
        <ul className="flex flex-col gap-3 tab:flex-row tab:justify-between pc:grow">
            {deadlineArray.map((item, index) => {
                const Icon = defineServiceIcon(item[0]);
                const title = getTranslations(item[0]) || "";

                return (
                    <li
                        key={index}
                        className="flex gap-2 items-center tab:items-start"
                    >
                        <Icon className=" text-purple-130 dark:text-purple-100 size-[32px] pc:size-[40px]" />
                        <p className="flex gap-1 items-center text-sm20 tab:flex-col tab:text-base tab:items-start pc:text-xl">
                            <span className="font-caviar font-bold text-purple-200 dark:text-white-200 desk:text-2xl">
                                {title}:
                            </span>
                            <span className="pc:text-base desk:text-lg25">
                                {item[1]}
                            </span>
                        </p>
                    </li>
                );
            })}
        </ul>
    );
};
