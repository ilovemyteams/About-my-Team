import React from "react";

import { selectedLink } from "./selectedLink";

// Додаємо параметр locale
export const parseTextWithLink = (text: string, locale: string) => {
    // Використовуємо змінну середовища та locale для створення посилання
    const linkRegex = /\*link=`([^`]*)`(?:\s+(noblank))?\*([^*]*)\*\/link\*/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }

        // Формуємо динамічний URL
        const url = match[1]
            .replace(
                "${process.env.NEXT_PUBLIC_BASE_URL}",
                process.env.NEXT_PUBLIC_BASE_URL || ""
            )
            .replace("${locale}", locale)
            .replace("${policyUrl}", selectedLink(locale));

        const noblank = match[2];
        const linkText = match[3];
        parts.push(
            <a
                className=" text-purple-130 dark:text-purple-50  dark:pc:hover:text-red 
 pc:hover:text-redLight dark:active:text-red active:text-redLight 
 dark:pc:focus:text-red pc:focus:text-redLight text-inherit outline-none
 transition-color ease-out duration-300 underline"
                href={url}
                key={url}
                target={noblank ? "_self" : "_blank"}
                rel="noopener noreferrer"
            >
                {linkText}
            </a>
        );
        lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return <>{parts}</>;
};
