import React from "react";

import { DescriptionType } from "@/src/mockedData/servicesData";
import { defineServiceIcon } from "@/src/utils/defineServiceIcon";

import { LayoutText } from "../shared/LayoutText";

interface TextInLineListItemProps {
    content: DescriptionType;
}

export const TextInLineListItem = ({ content }: TextInLineListItemProps) => {
    const { text, icon, title } = content;

    const Icon = defineServiceIcon(icon);

    return (
        <div className="flex gap-4 tab:gap-10 pc:gap-[60px] desk:gap-[40px]">
            <Icon className="text-purple-100 w-[40px] tab:w-[94px] pc:w-[160px] h-[40px] tab:h-[94px] pc:h-[160px] shrink-0 grow-0" />

            <div className="pc:flex pc:gap-10 items-center pb-4 tab:pb-6 pc:pb-10 border-b border-purple-strokeLight dark:border-purple-stroke grow">
                {title && (
                    <h4 className="pc:w-[390px] desk:w-[430px] grow-0 shrink-0 font-caviar text-purple-200 dark:text-white-200 text-lg tab:text-2xlb pc:text-3xl desk:text-4xl mb-4 tab:mb-6 pc:mb-0">
                        {title}
                    </h4>
                )}
                <LayoutText text={text} className="pc:grow" />
            </div>
        </div>
    );
};
