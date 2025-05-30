import Link from "next/link";
import { useLocale } from "next-intl";
import { ReactElement } from "react";

import { escapeSpecSymbolsInSearch } from "@/src/utils/escapeSpecSymbolsInSearch";
import type { LocaleType } from "@/types/LocaleType";

type HighlightTextProps = {
    text: string;
    toBeHighlighted: string;
    isInitial?: boolean;
    isStripped?: boolean;
};

const linkRegex = /\*link=`([^`]*)`(?:\s+(noblank))?\*([^*]*)\*\/link\*/g;

export const HighlightText = ({
    text,
    toBeHighlighted,
    isInitial = false,
    isStripped = false,
}: HighlightTextProps) => {
    const locale = useLocale() as LocaleType;

    if (isInitial) {
        return (
            <span className="text-textHighlight dark:text-inherit bg-purple-100 bg-opacity-40">
                {text}
            </span>
        );
    }

    const parseTextWithLink = (
        inputText: string,
        locale?: LocaleType
    ): (string | ReactElement)[] => {
        const matches = Array.from(inputText.matchAll(linkRegex));
        let lastIndex = 0;

        const result = matches.flatMap((match, matchIndex) => {
            const matchStartIndex = match.index ?? 0;
            const textBeforeLink =
                matchStartIndex > lastIndex
                    ? inputText.slice(lastIndex, matchStartIndex)
                    : "";
            lastIndex = matchStartIndex + match[0].length;

            const url = match[1]
                .replace("${locale}", locale || "")
                .replace(
                    "${process.env.NEXT_PUBLIC_BASE_URL}",
                    process.env.NEXT_PUBLIC_BASE_URL || ""
                );

            const noblank = match[2];
            const linkText = match[3];
            const highlightedLinkText = highlightSearchTerm(
                linkText,
                toBeHighlighted,
                false
            );

            return [
                ...highlightSearchTerm(
                    textBeforeLink,
                    toBeHighlighted,
                    isStripped
                ),
                <Link
                    className="text-purple-130 dark:text-purple-50 dark:pc:hover:text-red 
                        pc:hover:text-redLight dark:active:text-red active:text-redLight 
                        dark:pc:focus:text-red pc:focus:text-redLight outline-none
                        transition-color ease-out duration-300 underline"
                    href={url}
                    key={`${url}-${matchIndex}`}
                    target={noblank ? "_self" : "_blank"}
                >
                    {highlightedLinkText}
                </Link>,
            ];
        });

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
        if (!searchTerm) return [text];

        const words = searchTerm
            .split(/\s+/)
            .filter(Boolean)
            .map(escapeSpecSymbolsInSearch);

        const regex = new RegExp(`(${words.join("|")})`, "gi");

        return text
            .split(regex)
            .filter(Boolean)
            .map((part, index) => {
                if (regex.test(part)) {
                    const strippedPart =
                        isStripped && index === 0 ? part.slice(1) : part;

                    return (
                        <span
                            key={index}
                            className="text-textHighlight dark:text-inherit bg-purple-100 bg-opacity-40"
                        >
                            {strippedPart}
                        </span>
                    );
                }
                return part;
            });
    };

    const parsedResult = parseTextWithLink(text, locale);

    return <>{parsedResult}</>;
};
