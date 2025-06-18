import React from "react";
import { twMerge } from "tailwind-merge";

import { highlightPurple } from "@/src/utils/highlightingPurple";

interface HighlightTitleFromMockedDataProps {
    text: string;
    className?: string;
}

export const HighlightTitleFromMockedData = ({
    text,
    className = "",
}: HighlightTitleFromMockedDataProps) => {
    const highlightedTitle = highlightPurple(text);

    return (
        <h2
            className={twMerge(
                "font-caviar font-bold text-purple-200 dark:text-grey text-2xl24 tab:text-4xl pc:text-5xl desk:text-6xl mb-6 tab:mb-10 pc:mb-[64px]",
                className
            )}
        >
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
