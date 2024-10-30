import React from "react";

import { ListTextItemType } from "@/src/mockedData/questionsData";

import { HighlightText } from "../../shared/Search/HighlightText";

interface TableContentTextProps {
    item: string | ListTextItemType;
    searchTerm: string;
}
export const TableContentText = ({
    item,
    searchTerm,
}: TableContentTextProps) => {
    if (typeof item === "string") {
        return (
            <li>
                <p className="text-sm20 tab:text-base23 desk:text-lg25">
                    <HighlightText text={item} toBeHighlighted={searchTerm} />
                </p>
            </li>
        );
    }

    const { text, title, type, list } = item;
    return (
        <li className="mb-6">
            {title && (
                <div className=" flex gap-2 mb-3">
                    <div
                        className={`${type === "listItem" ? "block" : "hidden"} w-[20px]  h-[20px] shrink-0 bg-[url('/images/pencil&ruler.svg')] bg-no-repeat bg-contain bg-center`}
                    ></div>
                    <h4
                        className={`${list !== "sublist" ? "min-h-[40px] tab:min-h-[46px] desk:min-h-[50px]" : ""} font-caviar text-purple-200 dark:text-white-200 text-lg desk:text-xl`}
                    >
                        <HighlightText
                            text={title}
                            toBeHighlighted={searchTerm}
                        />
                    </h4>
                </div>
            )}
            <ul
                className={`${list === "sublist" ? "list-disc ml-12" : ""}  text-sm20 tab:text-base23 desk:text-lg25`}
            >
                {text.map((paragraph, i) => (
                    <li key={i}>
                        <HighlightText
                            text={paragraph}
                            toBeHighlighted={searchTerm}
                        />
                    </li>
                ))}
            </ul>
        </li>
    );
};
