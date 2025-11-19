import React from "react";
import { twMerge } from "tailwind-merge";

import { HighlightText } from "../../shared/Search/HighlightText";

interface LayoutTextProps {
    text: string | null;
    searchTerm: string;
    className?: string;
}

export const LayoutText = ({
    searchTerm,
    text,
    className = "",
}: LayoutTextProps) => {
    return (
        <p
            className={twMerge(
                "text-greyLight dark:text-grey text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 whitespace-pre-wrap",
                className
            )}
        >
            <HighlightText text={text || ""} toBeHighlighted={searchTerm} />
        </p>
    );
};
