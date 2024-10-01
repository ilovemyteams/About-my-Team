import React from "react";

import { EstimatedReadingTimeCounter } from "../shared/EstimatedReadingTimeCounter";

interface PageTitleProps {
    title: string;
    subtext: string;
}

export const PageTitle = ({ subtext, title }: PageTitleProps) => {
    return (
        <div className="flex flex-col tab:flex-row align-top gap-2 tab:gap-[14px]">
            <p className="text-sm text-red mt-0 tab:mt-3 px-1 py-[2px]">
                {subtext}
            </p>
            <div className="text-purple-50">
                <h1 className="text-3xl tab:text-4xl pc:text-6xl text-grey mb-4 pc:mb-6">
                    {title}
                </h1>
                <EstimatedReadingTimeCounter text="some text" />
            </div>
        </div>
    );
};
