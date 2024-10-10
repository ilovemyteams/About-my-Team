import React from "react";

import { EstimatedReadingTimeCounter } from "../shared/EstimatedReadingTimeCounter";

interface PageTitleProps {
    title: string;
    estimateText: string;
}

export const PageTitle = ({ title, estimateText }: PageTitleProps) => {
    return (
        <div className=" flex flex-col justify-between">
            <h1 className="font-caviar text-3xl tab:text-4xl desk:text-7xl pc:text-6xl text-purple-200 dark:text-grey mb-4 pc:mb-6">
                {title}
            </h1>
            <EstimatedReadingTimeCounter
                text={estimateText}
                className="text-purple-100 dark:text-purple-50 text-sm tab:text-base pc:text-lg"
            />
        </div>
    );
};
