import React from "react";

import { DescriptionType } from "@/src/mockedData/servicesData";

import { LayoutSubtitle } from "../shared/LayoutSubtitle";
import { LayoutText } from "../shared/LayoutText";

interface TwoSideListItemProps {
    content: DescriptionType;
}

export const TwoSideListItem = ({ content }: TwoSideListItemProps) => {
    const { text, title } = content;

    const lines = new Array(6).fill(null);

    new Array(6).map((_, index) => <div key={index} className="h-[60px]" />);

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

            <div className="mt-8 h-[60px] tab:h-auto tab:m-auto group-[:nth-of-type(4n)]:h-[90px] flex justify-center group-odd:hidden tab:group-odd:block group-last:hidden">
                <div
                    className="inline-flex gap-4 tab:gap-5 justify-center h-[60px] tab:h-[90px] group-[:nth-of-type(4n)]:rotate-90 
                    group-[:nth-of-type(4n)]:translate-y-4 tab:group-[:nth-of-type(4n)]:translate-y-0
                    tab:group-[:nth-of-type(4n+3)]:rotate-180 tab:group-[:nth-of-type(4n+1)]:rotate-270 tab:group-first:hidden tab:group-last:hidden
                    tab:flex tab:items-center tab:justify-center"
                >
                    {lines.map((_, index) => (
                        <div
                            key={index}
                            className={`h-full w-[1px] ${index === 0 ? "bg-purple-100" : "bg-purple-strokeLight dark:bg-purple-stroke"}`}
                        />
                    ))}
                </div>
            </div>
        </li>
    );
};
