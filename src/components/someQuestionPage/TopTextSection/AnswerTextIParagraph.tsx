import React from "react";

import { HighlightText } from "../../shared/Search/HighlightText";

interface AnswerTextIParagraphProps {
    text: string;
    indx: number;
    searchTerm: string;
}

export const AnswerTextIParagraph = ({
    text,
    indx,
    searchTerm,
}: AnswerTextIParagraphProps) => {
    if (indx !== 0) {
        return (
            <p>
                <HighlightText text={text} toBeHighlighted={searchTerm} />
            </p>
        );
    }
    let firstLetter, restParagraph;
    if (
        searchTerm !== "" &&
        text.toLowerCase().startsWith(searchTerm.toLowerCase())
    ) {
        firstLetter = (
            <HighlightText text={text[0]} toBeHighlighted={text[0]} isInitial />
        );
        restParagraph = (
            <HighlightText
                text={text}
                toBeHighlighted={searchTerm}
                isStripped
            />
        );
    } else {
        firstLetter = <HighlightText text={text[0]} toBeHighlighted={""} />;
        restParagraph = (
            <HighlightText text={text.slice(1)} toBeHighlighted={searchTerm} />
        );
    }

    return (
        <p className="tab:pt-1 pc:pt-[2px] desk:pt-[3px]">
            <span className="inline-block text-purple-100 dark:text-purple-50 font-caviar font-bold leading-[0.7] tab:leading-[0.8] pc:leading-[0.87] desk:leading-[0.83] text-[52px] tab:text-[56px] pc:text-[96px] desk:text-[122px] mr-1 pc:mr-2 float-left translate-y-[-1/2]">
                {firstLetter}
            </span>
            {restParagraph}
        </p>
    );
};