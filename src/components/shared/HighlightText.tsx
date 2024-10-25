import { ReactElement } from "react";

import type { LocaleType } from "@/types/LocaleType";

type HighlightTextProps = {
    text: string;
    toBeHighlighted: string;
    isInitial?: boolean;
    isStripped?: boolean;
    locale?: LocaleType;
};

const linkRegex = /\*link=`([^`]*)`\*([^*]*)\*\/link\*/g;

export const HighlightText = ({
    text,
    toBeHighlighted,
    isInitial = false,
    isStripped = false,
    locale,
}: HighlightTextProps) => {
    if (isInitial) {
        return (
            <span className="text-[#30253E] dark:text-inherit bg-purple-100 bg-opacity-40">
                {text}
            </span>
        );
    }

    // Function to highlight search term and parse links
    const parseTextWithLink = (
        inputText: string,
        locale?: LocaleType
    ): (string | ReactElement)[] => {
        const result: (string | ReactElement)[] = [];
        let lastIndex = 0;
        let match;

        // Split the text by the link regex
        while ((match = linkRegex.exec(inputText)) !== null) {
            if (match.index > lastIndex) {
                const textBeforeLink = inputText.slice(lastIndex, match.index);
                result.push(
                    ...highlightSearchTerm(
                        textBeforeLink,
                        toBeHighlighted,
                        isStripped
                    )
                );
            }

            const url = match[1].replace("${locale}", locale || "");
            const linkText = match[2];
            const highlightedLinkText = highlightSearchTerm(
                linkText,
                toBeHighlighted,
                false
            );

            result.push(
                <a
                    className=" text-purple-130 dark:text-purple-50  dark:pc:hover:text-red 
 pc:hover:text-redLight dark:active:text-red active:text-redLight 
 dark:pc:focus:text-red pc:focus:text-redLight font-caviar text-lg outline-none
 transition-color ease-out duration-300 underline"
                    href={url}
                    key={url}
                    target="_blank"
                >
                    {highlightedLinkText}
                </a>
            );

            lastIndex = linkRegex.lastIndex;
        }

        if (lastIndex < inputText.length) {
            const remainingText = inputText.slice(lastIndex);
            result.push(
                ...highlightSearchTerm(
                    remainingText,
                    toBeHighlighted,
                    isStripped
                )
            );
        }

        return result;
    };

    const highlightSearchTerm = (
        text: string,
        searchTerm: string,
        isStripped: boolean
    ): (string | ReactElement)[] => {
        if (!searchTerm) {
            return [text];
        }

        const words = searchTerm.split(/\s+/).filter(Boolean);
        const regex = new RegExp(`(${words.join("|")})`, "gi");
        const parts = text.split(regex).filter(Boolean);
        const highlightedParts: (string | ReactElement)[] = [];

        parts.forEach((part, index) => {
            if (regex.test(part)) {
                // Handle "stripped" case where the first letter might be removed
                const strippedPart =
                    isStripped && index === 0 ? part.slice(1) : part;

                highlightedParts.push(
                    <span
                        key={index}
                        className="text-[#30253E] dark:text-inherit bg-purple-100 bg-opacity-40"
                    >
                        {strippedPart}
                    </span>
                );
            } else {
                highlightedParts.push(part); // Non-highlighted part
            }
        });

        return highlightedParts;
    };

    const parsedResult = parseTextWithLink(text, locale);

    return <>{parsedResult}</>;
};
