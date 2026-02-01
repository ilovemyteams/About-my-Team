"use client";

import { useState } from "react";

import { IconUpVector } from "@/src/components/shared/Icons/IconUpVector";

interface ReadMoreTextProps {
    paragraphs: string[];
    limit?: number;
}

export const ReadMoreText = ({
    paragraphs,
    limit = 500,
}: ReadMoreTextProps) => {
    const [expanded, setExpanded] = useState(false);

    const fullText = paragraphs.join("\n\n");
    const isLong = fullText.length > limit;

    const visibleText =
        expanded || !isLong
            ? fullText + "\u00A0\u00A0"
            : fullText.slice(0, limit).trimEnd() + "...\u00A0";

    const parts = visibleText.split("\n\n");

    return (
        <div>
            {/* Mobile + Tablet */}
            <div className="pc:hidden">
                {parts.map((p, i) => {
                    const isLast = i === parts.length - 1;

                    return (
                        <p
                            key={i}
                            className={`mb-3 leading-[23px] last:mb-0 ${
                                isLast ? "inline-block" : "block"
                            }`}
                        >
                            {p}
                            {isLast && isLong && (
                                <button
                                    onClick={() => setExpanded(prev => !prev)}
                                    className="inline-flex items-end align-baseline text-redLight dark:text-red"
                                >
                                    <IconUpVector
                                        className={`w-[16px] h-[auto] ${expanded ? "rotate-180" : "rotate-0"}`}
                                    />
                                </button>
                            )}
                        </p>
                    );
                })}
            </div>

            {/* Desktop */}
            <div className="hidden pc:block">
                {paragraphs.map((p, i) => (
                    <p key={i} className="mb-3 leading-[23px] last:mb-0">
                        {p}
                    </p>
                ))}
            </div>
        </div>
    );
};
