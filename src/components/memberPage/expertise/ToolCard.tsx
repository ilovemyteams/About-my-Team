import { useTranslations } from "next-intl";

import { getMemberExperience } from "@/src/utils/getMemberExperience";
import { Tool } from "@/types/Tools";

interface ToolCardProps {
    tool: Tool;
}

export const ToolCard = ({ tool }: ToolCardProps) => {
    const t = useTranslations("MemberPage");

    return (
        <div className="tab:w-full flex tab:justify-between items-center border dark:border-purple-stroke tab:border-none px-2 py-1 tab:p-0">
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
        </div>
    );
};
