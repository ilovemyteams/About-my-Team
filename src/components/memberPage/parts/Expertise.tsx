import { getTranslations } from "next-intl/server";

import { getMemberExperience } from "@/src/utils/getMemberExperience";
import { Tools } from "@/types/Tools";

import { Title } from "./shared/Title";

interface ExpertiseProps {
    tools: Tools[];
}

export const Expertise = async ({ tools }: ExpertiseProps) => {
    const t = await getTranslations("MemberPage");

    return (
        <section>
            <Title>{t("expertise")}</Title>
            <ul className="w-full flex flex-wrap tab:flex-col gap-2 tab:gap-4 desk:gap-3 p-4">
                {tools.map(tool => (
                    <li
                        key={tool.name}
                        className="tab:w-full flex tab:justify-between items-center border dark:border-purple-stroke tab:border-none px-2 py-1 tab:p-0"
                    >
                        <p
                            className="max-w-[181px] tab:max-w-full tab:border dark:border-purple-stroke tab:px-2 tab:py-1 text-sm tab:text-base desk:text-[18px] font-normal truncate"
                            title={tool.name}
                        >
                            {tool.name}
                        </p>
                        {tool.startDate && (
                            <p className="ml-3 text-purple-130 dark:text-purple-50 text-sm font-normal desk:text-base whitespace-nowrap">
                                {t("year", {
                                    experience: getMemberExperience(
                                        tool.startDate,
                                        tool.endDate
                                    ),
                                })}
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};
