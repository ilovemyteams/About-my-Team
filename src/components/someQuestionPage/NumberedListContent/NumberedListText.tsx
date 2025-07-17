import { ListTextItemType } from "@/src/mockedData/questionsData";

import { HighlightText } from "../../shared/Search/HighlightText";

interface NumberedListTextProps {
    text: string | ListTextItemType;
    type: "list" | "unchecked" | undefined;
    searchTerm: string;
}

export const NumberedListText = ({
    text,
    type,
    searchTerm,
}: NumberedListTextProps) => {
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

    if (text.type === "listItem") {
        return (
            <li className="list-disc ml-6">
                <p className="text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34">
                    {text.title && (
                        <span className="font-caviar font-bold mr-2 text-purple-200 dark:text-white-200">
                            <HighlightText
                                text={text.title}
                                toBeHighlighted={searchTerm}
                            />
                        </span>
                    )}
                    {text.text.map((text, index) => (
                        <HighlightText
                            text={text}
                            toBeHighlighted={searchTerm}
                            key={index}
                        />
                    ))}
                </p>
            </li>
        );
    }
    return (
        <li>
            <p className="text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34">
                {text.title && (
                    <span className="font-caviar font-bold mr-2">
                        <HighlightText
                            text={text.title}
                            toBeHighlighted={searchTerm}
                        />
                    </span>
                )}
                {text.text.map((text, index) => (
                    <HighlightText
                        text={text}
                        toBeHighlighted={searchTerm}
                        key={index}
                    />
                ))}
            </p>
        </li>
    );
};
