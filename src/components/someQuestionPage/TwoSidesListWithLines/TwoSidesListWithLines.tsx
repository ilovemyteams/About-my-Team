import React from "react";

import { LongAnswerListType } from "@/src/mockedData/questionsData";

import { LayoutTitle } from "../shared/LayoutTitle";
import { TwoSidesListItem } from "./TwoSidesListItem";

interface TwoSidesListWithLinesProps {
    content: LongAnswerListType;
    searchTerm: string;
}

export const TwoSidesListWithLines = ({
    content,
    searchTerm,
}: TwoSidesListWithLinesProps) => {
    const { title, data } = content;

    return (
        <div className="pb-[80px] tab:pb-[100px] desk:pb-[120px]">
            {title && (
                <LayoutTitle className="mb-10 tab:mb-[64px] pc:mb-[80px]">
                    {title}
                </LayoutTitle>
            )}
            <ul className="pc:pb-[60px]">
                {data.map((item, index) => (
                    <TwoSidesListItem
                        key={index}
                        item={item}
                        searchTerm={searchTerm}
                    />
                ))}
            </ul>
        </div>
    );
};
