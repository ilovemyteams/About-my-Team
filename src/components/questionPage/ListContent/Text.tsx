import { ListTextItemType, TextItemType } from "@/src/mockedData/questionsData";

import { HighlightText } from "../../shared/Search/HighlightText";

interface TextProps {
    text: string | TextItemType | ListTextItemType;
    type: "list" | undefined;
    searchTerm: string;
}

export const Text = ({ text, type, searchTerm }: TextProps) => {
    const listStyle = type === "list" ? "list-disc ml-6" : "";

    if (typeof text === "string") {
        return (
            <li className={listStyle}>
                <p className="text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34">
                    <HighlightText text={text} toBeHighlighted={searchTerm} />
                </p>
            </li>
        );
    }

    return null;
};
