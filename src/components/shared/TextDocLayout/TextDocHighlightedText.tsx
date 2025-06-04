import React from "react";

import { highlightPurple } from "@/src/utils/highlightingPurple";

interface HighlightedTextProps {
    text: string;
}

export const TextDocHighlightedText = ({ text }: HighlightedTextProps) => {
    const highlightedTitle = highlightPurple(text);

    return highlightedTitle.map((part, index) => {
        if (part.decoration === "purple") {
            return (
                <span key={index} className="text-purple-100">
                    {part.text}
                </span>
            );
        }
        return part.text;
    });
};
