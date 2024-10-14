import React from "react";

interface AnswerTextIParagraphProps {
    text: string;
    indx: number;
}

export const AnswerTextIParagraph = ({
    text,
    indx,
}: AnswerTextIParagraphProps) => {
    if (indx !== 0) {
        return <p>{text}</p>;
    }
    const firstLetter = text[0];
    const restParagraph = text.slice(1);

    return (
        <p className="tab:pt-1 pc:pt-[2px] desk:pt-[3px]">
            <span className="inline-block text-purple-100 dark:text-purple-50 font-caviar font-bold leading-[0.7] tab:leading-[0.8] pc:leading-[0.87] desk:leading-[0.83] text-[52px] tab:text-[56px] pc:text-[96px] desk:text-[122px] mr-1 pc:mr-2 float-left translate-y-[-1/2]">
                {firstLetter}
            </span>
            {restParagraph}
        </p>
    );
};
