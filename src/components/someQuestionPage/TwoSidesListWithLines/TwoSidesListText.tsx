import React from "react";

import { ListTextItemType } from "@/src/mockedData/questionsData";

import { HighlightText } from "../../shared/Search/HighlightText";

interface TwoSidesListTextProps {
    text: string | ListTextItemType;
    className?: string;
    searchTerm: string;
}

export const TwoSidesListText = ({
    text: content,
    className,
    searchTerm,
}: TwoSidesListTextProps) => {
    // const styleText = "text-sm20 tab:text-base23 desk:text-lg25";
    const styleText = "text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34";

    if (typeof content === "string") {
        return (
            <p className={`${styleText} ${className}`}>
                <HighlightText text={content} toBeHighlighted={searchTerm} />
            </p>
        );
    }

    const { text, type } = content;

    return (
        <ul>
            {text.map((item, index) => (
                <li className="flex gap-[6px] pc:gap-2" key={index}>
                    {type === "listItem" && (
                        <span
                            className={`font-caviar font-bold ml-1 ${styleText}`}
                        >
                            {"\u2022"}
                        </span>
                    )}

                    <p className={`${styleText} ${className}`}>
                        <HighlightText
                            text={item}
                            toBeHighlighted={searchTerm}
                        />
                    </p>
                </li>
            ))}
        </ul>
    );
};
