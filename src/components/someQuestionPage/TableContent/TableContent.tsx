import React from "react";
import { twMerge } from "tailwind-merge";

import { LongAnswerListTypeItem } from "@/src/mockedData/questionsData";

import { HighlightText } from "../../shared/Search/HighlightText";
import { TableContentItem } from "./TableContentItem";

interface TableContentProps {
    content: LongAnswerListTypeItem[];
    searchTerm: string;
    title?: string;
    text?: string;
}

export const TableContent = ({
    content,
    searchTerm,
    title,
    text,
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
            {text && (
                <p className="mb-6 tab:mb-10 desk:mb-[80px] tab:w-[70%] pc:w-[56%] desk:w-[53%] text-greyLight dark:text-grey text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 whitespace-pre-wrap">
                    <HighlightText text={text} toBeHighlighted={searchTerm} />
                </p>
            )}
            <ul className=" list-none tab:flex tab:flex-wrap tab:justify-center">
                {content &&
                    content.map((item, index) => (
                        <li
                            key={index}
                            className={twMerge(
                                " tab:px-4 border-purple-strokeLight dark:border-purple-stroke tab:w-[50%]  border-t-[1px] last:border-b-[1px] tab:border-[1px] tab:mt-[-1px] tab:ml-[-1px]",
                                content.length < 3
                                    ? "pc:w-[50%]"
                                    : "pc:w-[33.33%]"
                            )}
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
