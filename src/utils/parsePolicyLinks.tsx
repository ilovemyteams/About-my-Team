import { policyEmail, policySite } from "../constants/policyInfo";

export const parsePolicyLinks = (text: string, locale: string) => {
    const anchorRegex = /\*(site|email)\*/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = anchorRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }

        const key = match[1];

        if (key === "email") {
            parts.push(
                <a
                    className=" text-purple-130 dark:text-purple-50  dark:pc:hover:text-red 
 pc:hover:text-redLight dark:active:text-red active:text-redLight 
 dark:pc:focus:text-red pc:focus:text-redLight text-inherit outline-none
 transition-color ease-out duration-300"
                    href={`mailto:${policyEmail}`}
                    key={policyEmail}
                >
                    {policyEmail}
                </a>
            );
        }

        if (key === "site") {
            const url = `https://${policySite}/${locale}`;
            parts.push(
                <a
                    className=" text-purple-130 dark:text-purple-50  dark:pc:hover:text-red 
 pc:hover:text-redLight dark:active:text-red active:text-redLight 
 dark:pc:focus:text-red pc:focus:text-redLight text-inherit outline-none
 transition-color ease-out duration-300 "
                    href={url}
                    key={policySite}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {policySite}
                </a>
            );
        }
        lastIndex = anchorRegex.lastIndex;
    }

    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return parts;
};
