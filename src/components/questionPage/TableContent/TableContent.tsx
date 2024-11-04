import React from "react";

import { LongAnswerListTypeItem } from "@/src/mockedData/questionsData";

import { TableContentItem } from "./TableContentItem";

interface TableContentProps {
    content: LongAnswerListTypeItem[];
    searchTerm: string;
    title?: string;
}

export const TableContent = ({ content, searchTerm }: TableContentProps) => {
    return (
        <div className="pc:mb-[60px]">
            <ul className=" list-none border-t border-purple-strokeLight dark:border-purple-stroke  tab:flex tab:flex-wrap pc:flex-nowrap tab:justify-center">
                {content &&
                    content.map((item, index) => (
                        <li
                            key={index}
                            className=" tab:px-4 border-b border-purple-strokeLight dark:border-purple-stroke tab:border-l tab:[&:nth-child(3)]:border-r tab:[&:nth-child(2)]:border-r pc:[&:nth-child(2)]:border-r-0 tab:w-[50%]"
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
