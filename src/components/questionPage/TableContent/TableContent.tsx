import React from "react";

import { LongAnswerListTypeItem } from "@/src/mockedData/questionsData";

import { HighlightText } from "../../shared/Search/HighlightText";
import { TableContentItem } from "./TableContentItem";

interface TableContentProps {
    content: LongAnswerListTypeItem[];
    searchTerm: string;
    title?: string;
}

export const TableContent = ({
    content,
    searchTerm,
    title,
}: TableContentProps) => {
    return (
        <div className="pc:mb-[60px]">
            {title && (
                <h3 className="font-caviar text-purple-200 dark:text-white-200 text-2xlb tab:text-4xl pc:text-5xl desk:text-6xl mb-10 tab:mb-[64px] pc:mb-[80px]">
                    <HighlightText
                        text={title as string}
                        toBeHighlighted={searchTerm}
                    />
                </h3>
            )}
            <ul className=" list-none border-t border-purple-strokeLight dark:border-purple-stroke  tab:flex tab:flex-wrap tab:justify-center">
                {content &&
                    content.map((item, index) => (
                        <li
                            key={index}
                            className=" tab:px-4 border-b border-purple-strokeLight dark:border-purple-stroke tab:last:border-r tab:border-l tab:even:border-r pc:even:border-r-0 pc:[&:nth-child(3)]:border-r tab:w-[50%] pc:w-[33.33%]"
                        >
                            <TableContentItem
                                content={item}
                                searchTerm={searchTerm}
                            />
                        </li>
                    ))}
            </ul>
        </div>
    );
};
