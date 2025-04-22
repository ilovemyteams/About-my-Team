import React from "react";

import { highlightPurple } from "@/src/utils/highlightingPurple";

interface ScrollSectionTitleProps {
    text: string;
}

export const ScrollSectionTitle = ({ text }: ScrollSectionTitleProps) => {
    const highlightedTitle = highlightPurple(text);
    return (
        <h2 className="font-caviar font-bold text-purple-200 dark:text-grey text-2xl24 mb-6 tab:text-4xl tab:mb-10 pc:text-5xl pc:mb-[64px] desk:text-6xlt">
            {highlightedTitle.map((part, index) => {
                if (part.decoration === "purple") {
                    return (
                        <span key={index} className="text-purple-100">
                            {part.text}
                        </span>
                    );
                }
                return <span key={index}>{part.text}</span>;
            })}
        </h2>
    );
};
