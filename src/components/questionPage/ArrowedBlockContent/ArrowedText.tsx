import { ListTextItemType } from "@/src/mockedData/questionsData";

import { HighlightText } from "../../shared/Search/HighlightText";

interface ArrowedTextProps {
    data: string[] | ListTextItemType[];
    searchTerm: string;
}

export const ArrowedText = ({ data, searchTerm }: ArrowedTextProps) => {
    return data.map((item, index) => {
        if (typeof item === "string") {
            return (
                <li key={index}>
                    <p className="text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 mb-5 tab:mb-6 desk:mb-10">
                        <HighlightText
                            text={item}
                            toBeHighlighted={searchTerm}
                        />
                    </p>
                </li>
            );
        }

        const { text, title, type } = item;

        return (
            <li key={index}>
                <p className="text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34">
                    {type === "listItem" && (
                        <span className="font-caviar font-bold">- </span>
                    )}
                    {title && (
                        <span className="font-caviar font-bold mr-2">
                            <HighlightText
                                text={title}
                                toBeHighlighted={searchTerm}
                            />
                        </span>
                    )}
                    {text.map((itemText, index) => (
                        <HighlightText
                            text={itemText}
                            toBeHighlighted={searchTerm}
                            key={index}
                        />
                    ))}
                </p>
            </li>
        );
    });
};
