import React from "react";

import { LongAnswerListType } from "@/src/mockedData/questionsData";

import { TableContentItem } from "./TableContentItem";

export const TableContent = ({
    content,
}: {
    content: LongAnswerListType[];
}) => {
    return (
        <div>
            <ul className=" list-none border-t border-purple-strokeLight dark:border-purple-stroke  tab:flex tab:flex-wrap pc:flex-nowrap tab:justify-center">
                {content &&
                    content.map((item, index) => (
                        <li
                            key={index}
                            className=" tab:px-4 tab:min-h-[589px] pc:min-h-[662px] border-b border-purple-strokeLight dark:border-purple-stroke tab:border-l tab:[&:nth-child(3)]:border-r tab:[&:nth-child(2)]:border-r pc:[&:nth-child(2)]:border-r-0 tab:w-[50%]"
                        >
                            <TableContentItem content={item} />
                        </li>
                    ))}
            </ul>
        </div>
    );
};
