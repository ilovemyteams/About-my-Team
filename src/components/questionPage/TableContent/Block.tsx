import React from "react";

import { ListTextItemType } from "@/src/mockedData/questionsData";

import { HighlightText } from "../../shared/Search/HighlightText";

interface BlockProps {
    item: string | ListTextItemType;
    searchTerm: string;
}
export const Block = ({ item, searchTerm }: BlockProps) => {
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
                <h4
                    className={`${list !== "sublist" ? "min-h-[40px] tab:min-h-[46px] desk:min-h-[50px]" : ""} font-caviar text-lg mb-3 flex gap-2 desk:text-xl before:w-[20px] ${type === "listItem" ? "before:block" : "before:hidden"} before:h-[20px] before:shrink-0 before:bg-[url('/images/pencil&ruler.svg')] before:bg-no-repeat before:bg-contain before:bg-center`}
                >
                    <HighlightText text={title} toBeHighlighted={searchTerm} />
                </h4>
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
