import React from "react";

import { LongAnswerListTypeItem } from "@/src/mockedData/questionsData";

import { HighlightText } from "../../shared/Search/HighlightText";
import { LayoutTitle } from "../shared/LayoutTitle";

interface DescriptionListContentProps {
    content: LongAnswerListTypeItem[];
    searchTerm: string;
    title?: string;
    text?: string;
    summary?: string;
}

export const DescriptionListContent = ({
    content,
    searchTerm,
    title,
    text,
    summary,
}: DescriptionListContentProps) => {
    return (
        <div>
            {title && (
                <LayoutTitle className="pc:max-w-[910px] desk:max-w-full  mb-10 tab:mb-[64px] pc:mb-[80px] ">
                    <HighlightText text={title} toBeHighlighted={searchTerm} />
                </LayoutTitle>
            )}
            {text && (
                <p className="desk:mb-[80px] tab:w-[70%] pc:w-[56%] desk:w-[70%] text-greyLight dark:text-grey text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 whitespace-pre-wrap mb-10 tab:mb-[64px] pc:mb-[80px]">
                    <HighlightText text={text} toBeHighlighted={searchTerm} />
                </p>
            )}
            <ul className="flex flex-col gap-6 tab:gap-10 pc:gap-[60px]">
                {content.map((item, index) => (
                    <li
                        key={index}
                        className="grid tab:grid-cols-[320px_1fr] pc:grid-cols-[370px_1fr] gap-4 tab:gap-10  pb-4 tab:pb-6 pc:pb-10 border-b-1 dark:border-purple-stroke"
                    >
                        <p className="font-caviar text-lg tab:text-2xlb pc:text-3xl desk:text-4xl text-purple-100 dark:text-purple-50 tab:basis-[320px] pc:basis-[370px]">
                            <HighlightText
                                text={item.title || ""}
                                toBeHighlighted={searchTerm}
                            />
                        </p>

                        <p className="text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34">
                            <HighlightText
                                text={item.text.toString()}
                                toBeHighlighted={searchTerm}
                            />
                        </p>
                    </li>
                ))}
            </ul>
            {summary && (
                <p className="mt-10 tab:mt-[64px] pc:mt-[80px] tab:w-[70%] pc:w-[56%] desk:w-[60%] text-greyLight dark:text-grey text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 whitespace-pre-wrap">
                    <HighlightText
                        text={summary}
                        toBeHighlighted={searchTerm}
                    />
                </p>
            )}
        </div>
    );
};
