import {
    mainEmail,
    ofertaUrl,
    policyUrl,
    servicesUrl,
    siteUrl,
} from "../constants/policyInfo";

export const parsePolicyLinks = (text: string, locale: string) => {
    const anchorRegex =
        /\*(site|email|oferta|services|policy|emailSusanna|ofertaUA|ofertaPL|ofertaEN|Firefox|Chrome|Safari|Opera|MicrosoftEdge|InternetExplorer)\*/g;
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
                    href={`mailto:${mainEmail}`}
                    key={mainEmail}
                >
                    {mainEmail}
                </a>
            );
        }

        if (key === "site") {
            const url = `https://${siteUrl}/${locale}`;
            parts.push(
                <a
                    className=" text-purple-130 dark:text-purple-50  dark:pc:hover:text-red 
 pc:hover:text-redLight dark:active:text-red active:text-redLight 
 dark:pc:focus:text-red pc:focus:text-redLight text-inherit outline-none
 transition-color ease-out duration-300 "
                    href={url}
                    key={siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {siteUrl}
                </a>
            );
        }

        if (key === "oferta") {
            const url = `https://${siteUrl}/${locale}/${ofertaUrl}`;
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
                    {url}
                </a>
            );
        }

        if (key === "ofertaEN") {
            const url = `https://${siteUrl}/en/${ofertaUrl}`;
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
            const url = `https://${siteUrl}/ua/${ofertaUrl}`;
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
            const url = `https://${siteUrl}/pl/${ofertaUrl}`;
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
            const url = `https://${siteUrl}/${locale}/${servicesUrl}`;
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

        if (key === "policy") {
            const url = `https://${siteUrl}/${locale}/${policyUrl}`;
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
                    {url}
                </a>
            );
        }
        if (key === "InternetExplorer") {
            const url = `https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d`;
            parts.push(
                <a
                    className=" text-purple-130 dark:text-purple-50  dark:pc:hover:text-red 
 pc:hover:text-redLight dark:active:text-red active:text-redLight 
 dark:pc:focus:text-red pc:focus:text-redLight text-inherit outline-none
 transition-color ease-out duration-300 "
                    href={url}
                    key={"Internet Explorer"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {"Internet Explorer"}
                </a>
            );
        }
        if (key === "MicrosoftEdge") {
            const url = `https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd`;
            parts.push(
                <a
                    className=" text-purple-130 dark:text-purple-50  dark:pc:hover:text-red 
 pc:hover:text-redLight dark:active:text-red active:text-redLight 
 dark:pc:focus:text-red pc:focus:text-redLight text-inherit outline-none
 transition-color ease-out duration-300 "
                    href={url}
                    key={"Microsoft Edge"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {"Microsoft Edge"}
                </a>
            );
        }
        if (key === "Opera") {
            const url = `https://help.opera.com/en/latest/web-preferences/#cookies`;
            parts.push(
                <a
                    className=" text-purple-130 dark:text-purple-50  dark:pc:hover:text-red 
 pc:hover:text-redLight dark:active:text-red active:text-redLight 
 dark:pc:focus:text-red pc:focus:text-redLight text-inherit outline-none
 transition-color ease-out duration-300 "
                    href={url}
                    key={"Opera"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {"Opera"}
                </a>
            );
        }
        if (key === "Safari") {
            const url = `https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac`;
            parts.push(
                <a
                    className=" text-purple-130 dark:text-purple-50  dark:pc:hover:text-red 
 pc:hover:text-redLight dark:active:text-red active:text-redLight 
 dark:pc:focus:text-red pc:focus:text-redLight text-inherit outline-none
 transition-color ease-out duration-300 "
                    href={url}
                    key={"Safari"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {"Safari"}
                </a>
            );
        }
        if (key === "Firefox") {
            const url = `https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US`;
            parts.push(
                <a
                    className=" text-purple-130 dark:text-purple-50  dark:pc:hover:text-red 
 pc:hover:text-redLight dark:active:text-red active:text-redLight 
 dark:pc:focus:text-red pc:focus:text-redLight text-inherit outline-none
 transition-color ease-out duration-300 "
                    href={url}
                    key={"Firefox"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {"Firefox"}
                </a>
            );
        }
        if (key === "Chrome") {
            const url = `https://support.google.com/chrome/answer/95647`;
            parts.push(
                <a
                    className=" text-purple-130 dark:text-purple-50  dark:pc:hover:text-red 
 pc:hover:text-redLight dark:active:text-red active:text-redLight 
 dark:pc:focus:text-red pc:focus:text-redLight text-inherit outline-none
 transition-color ease-out duration-300 "
                    href={url}
                    key={"Chrome"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {"Chrome"}
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
