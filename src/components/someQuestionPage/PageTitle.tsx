import React from "react";

import { EstimatedReadingTimeCounter } from "../shared/EstimatedReadingTimeCounter";
import { HighlightText } from "../shared/Search/HighlightText";

interface PageTitleProps {
    title: string | null;
    estimateTime: number | null;
    searchTerm: string;
}

export const PageTitle = ({
    title,
    estimateTime,
    searchTerm,
}: PageTitleProps) => {
    return (
        <div className=" flex flex-col justify-between">
            <h1 className="font-caviar text-3xl tab:text-4xl desk:text-7xl pc:text-6xl text-purple-200 dark:text-grey mb-4 pc:mb-6 whitespace-pre-wrap">
                <HighlightText
                    text={title || ""}
                    toBeHighlighted={searchTerm}
                />
            </h1>
            <EstimatedReadingTimeCounter
                value={estimateTime || 0}
                className="text-purple-100 dark:text-purple-50 text-sm tab:text-base pc:text-lg"
            />
        </div>
    );
};
