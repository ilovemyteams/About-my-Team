import React from "react";

// Додаємо параметр locale
export const parseTextWithLink = (text: string, locale: string) => {
    // Використовуємо змінну середовища та locale для створення посилання
    const linkRegex = /\*link=`([^`]*)`\*([^*]*)\*\/link\*/g;
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
            .replace("${locale}", locale);

        parts.push(
            <a
                className="dark:text-red dark:border-red text-redLight border-redLight border-b"
                href={url}
                key={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {match[2]}
            </a>
        );
        lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return <>{parts}</>;
};
