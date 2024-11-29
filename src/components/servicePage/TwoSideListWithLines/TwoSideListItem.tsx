import React from "react";

import { DescriptionType } from "@/src/mockedData/servicesData";

import { LayoutSubtitle } from "../shared/LayoutSubtitle";
import { LayoutText } from "../shared/LayoutText";
import { Lines } from "./Lines";

interface TwoSideListItemProps {
    content: DescriptionType;
}

export const TwoSideListItem = ({ content }: TwoSideListItemProps) => {
    const { text, title } = content;

    return (
        <li
            className="group tab:flex tab:even:flex-row-reverse odd:border-b-[1px] tab:border-none border-purple-strokeLight dark:border-purple-stroke 
        odd:mb-6 odd:pb-6 tab:odd:pb-0 even:mb-8 tab:odd:mb-0 tab:even:mb-0 last:border-none last:odd:mb-0 last:odd:pb-0 last:even:mb-0"
        >
            <div
                className="tab:grow-0 tab:shrink-0 tab:group-odd:w-[calc(50%_+_1px)] tab:group-even:w-1/2 tab:border-t-[1px] tab:border-b-[1px] tab:group-even:border-l-[1px] tab:group-odd:border-r-[1px]
            tab:mb-[-1px] border-purple-strokeLight dark:border-purple-stroke tab:px-7 tab:py-6 pc:py-7"
            >
                {title && <LayoutSubtitle text={title} />}
                <LayoutText text={text} isSmall={true} />
            </div>

            <div className="mt-8 h-[60px] tab:h-auto tab:m-auto flex justify-center group-odd:hidden tab:group-odd:block group-last:hidden">
                <div
                    className="group-[:nth-of-type(4n)]:rotate-180 tab:group-[:nth-of-type(4n)]:rotate-90 
                   tab:group-[:nth-of-type(4n+3)]:rotate-180 tab:group-[:nth-of-type(4n+1)]:rotate-270 tab:group-first:hidden tab:group-last:hidden"
                >
                    <Lines />
                </div>
            </div>
        </li>
    );
};
