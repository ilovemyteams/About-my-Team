import React from "react";

import { LongAnswerListTypeItem } from "@/src/mockedData/questionsData";

import { HighlightText } from "../../shared/Search/HighlightText";

interface SpecificationContentProps {
    content: LongAnswerListTypeItem[];
    searchTerm: string;
    title?: string;
}

export const SpecificationContent = ({
    content,
    searchTerm,
    title,
}: SpecificationContentProps) => {
    return (
        <div>
            {title && (
                <h3 className="font-caviar font-bold text-xl tab:text-3xl pc:text-5xl mb-10 tab:mb-[80px] text-purple-200 dark:text-grey ">
                    <HighlightText text={title} toBeHighlighted={searchTerm} />
                </h3>
            )}
            <ul className="flex flex-col gap-6 tab:gap-10">
                {content.map((item, index) => (
                    <li
                        key={index}
                        className="grid tab:grid-cols-[320px_1fr] pc:grid-cols-[370px_1fr] gap-4 tab:gap-10 pb-4 tab:pb-6 border-b-1 dark:border-purple-stroke"
                    >
                        <p className="font-caviar text-lg tab:text-base23 pc:text-4xl text-purple-100 dark:text-purple-50 tab:basis-[320px] pc:basis-[370px]">
                            <HighlightText
                                text={item.title || ""}
                                toBeHighlighted={searchTerm}
                            />
                        </p>
                        <p className="text-sm20 tab:text-2xl34">
                            <HighlightText
                                text={item.text.toString()}
                                toBeHighlighted={searchTerm}
                            />
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
