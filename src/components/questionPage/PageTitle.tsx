import React from "react";

import { EstimatedReadingTimeCounter } from "../shared/EstimatedReadingTimeCounter";

interface PageTitleProps {
    title: string;
    subtext: string;
    estimateText: string;
}

export const PageTitle = ({ title, estimateText }: PageTitleProps) => {
    return (
        <div className="text-purple-100 dark:text-purple-50">
            <h1 className="text-3xl tab:text-4xl pc:text-6xl text-purple-200 dark:text-grey mb-4 pc:mb-6">
                {title}
            </h1>
            <EstimatedReadingTimeCounter text={estimateText} />
        </div>
    );
};
