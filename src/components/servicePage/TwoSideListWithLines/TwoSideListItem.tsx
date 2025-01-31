import React from "react";

import { DescriptionType } from "@/src/mockedData/servicesData";

import { LayoutSubtitle } from "../shared/LayoutSubtitle";
import { LayoutText } from "../shared/LayoutText";
import { AnimatedTwoSideListItem } from "./AnimatedTwoSideListItem";
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
            <AnimatedTwoSideListItem>
                {title && <LayoutSubtitle text={title} />}
                <LayoutText text={text} isSmall={true} />
            </AnimatedTwoSideListItem>

            <div className="mt-8 h-[60px] tab:h-auto tab:m-auto flex justify-center group-odd:hidden tab:group-odd:block group-last:hidden">
                <div
                    className="group-[:nth-of-type(4n)]:rotate-180 tab:group-[:nth-of-type(3n+1)]:rotate-90 
                   tab:group-[:nth-of-type(3n)]:rotate-180 tab:group-first:hidden tab:group-last:hidden"
                >
                    <Lines />
                </div>
            </div>
        </li>
    );
};
