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
        <p className="pt-[14px] tab:pt-[18px]">
            <span className="inline-block text-purple-100 dark:text-purple-50 font-caviar font-bold leading-[0.42] tab:leading-[0.5] pc:leading-[0.34] text-[52px] tab:text-[56px] pc:text-[64px] mr-1 pc:mr-2 float-left translate-y-[-1/2]">
                {firstLetter}
            </span>
            {restParagraph}
        </p>
    );
};
