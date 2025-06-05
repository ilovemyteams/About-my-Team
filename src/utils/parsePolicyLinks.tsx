import {
    ofertaUrl,
    policyEmail,
    policySite,
    policyUrl,
    servicesLink,
} from "../constants/policyInfo";

export const parsePolicyLinks = (text: string, locale: string) => {
    const anchorRegex =
        /\*(site|email|oferta|services|policy|emailSusanna|ofertaUA|ofertaPL|ofertaEN)\*/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = anchorRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }

        const key = match[1];

        if (key === "emailSusanna") {
            parts.push(
                <a
                    className=" text-purple-130 dark:text-purple-50  dark:pc:hover:text-red 
 pc:hover:text-redLight dark:active:text-red active:text-redLight 
 dark:pc:focus:text-red pc:focus:text-redLight text-inherit outline-none
 transition-color ease-out duration-300"
                    href={`mailto:susanna.salata@gmail.com`}
                    key={"susanna.salata@gmail.com"}
                >
                    susanna.salata@gmail.com
                </a>
            );
        }

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

        if (key === "oferta") {
            const url = `${ofertaUrl}/${locale}`;
            parts.push(
                <a
                    className=" text-purple-130 dark:text-purple-50  dark:pc:hover:text-red 
 pc:hover:text-redLight dark:active:text-red active:text-redLight 
 dark:pc:focus:text-red pc:focus:text-redLight text-inherit outline-none
 transition-color ease-out duration-300 "
                    href={url}
                    key={ofertaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {ofertaUrl}
                </a>
            );
        }

        if (key === "ofertaEN") {
            const url = `${ofertaUrl}/en`;
            parts.push(
                <a
                    className=" text-purple-130 dark:text-purple-50  dark:pc:hover:text-red 
 pc:hover:text-redLight dark:active:text-red active:text-redLight 
 dark:pc:focus:text-red pc:focus:text-redLight text-inherit outline-none
 transition-color ease-out duration-300 "
                    href={url}
                    key={url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {url}
                </a>
            );
        }
        if (key === "ofertaUA") {
            const url = `${ofertaUrl}/ua`;
            parts.push(
                <a
                    className=" text-purple-130 dark:text-purple-50  dark:pc:hover:text-red 
 pc:hover:text-redLight dark:active:text-red active:text-redLight 
 dark:pc:focus:text-red pc:focus:text-redLight text-inherit outline-none
 transition-color ease-out duration-300 "
                    href={url}
                    key={url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {url}
                </a>
            );
        }
        if (key === "ofertaPL") {
            const url = `${ofertaUrl}/pl`;
            parts.push(
                <a
                    className=" text-purple-130 dark:text-purple-50  dark:pc:hover:text-red 
 pc:hover:text-redLight dark:active:text-red active:text-redLight 
 dark:pc:focus:text-red pc:focus:text-redLight text-inherit outline-none
 transition-color ease-out duration-300 "
                    href={url}
                    key={url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {url}
                </a>
            );
        }

        if (key === "services") {
            const url = `${servicesLink}/${locale}`;
            parts.push(
                <a
                    className=" text-purple-130 dark:text-purple-50  dark:pc:hover:text-red 
 pc:hover:text-redLight dark:active:text-red active:text-redLight 
 dark:pc:focus:text-red pc:focus:text-redLight text-inherit outline-none
 transition-color ease-out duration-300 "
                    href={url}
                    key={servicesLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {servicesLink}
                </a>
            );
        }

        if (key === "policy") {
            const url = `${policyUrl}/${locale}`;
            parts.push(
                <a
                    className=" text-purple-130 dark:text-purple-50  dark:pc:hover:text-red 
 pc:hover:text-redLight dark:active:text-red active:text-redLight 
 dark:pc:focus:text-red pc:focus:text-redLight text-inherit outline-none
 transition-color ease-out duration-300 "
                    href={url}
                    key={policyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {policyUrl}
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
