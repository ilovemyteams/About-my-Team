import { selectedLink } from "@/src/utils/selectedLink";
import { useLocale, useTranslations } from "next-intl";

export const PrivacyPolicy = () => {
    const getTranslation = useTranslations("Footer");
    const locale = useLocale();
    const PolicyURL = selectedLink(locale);
    return (
        <a
            href={PolicyURL}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-[20px] tab:mb-0 text-sm outline-none dark:pc:hover:text-red pc:hover:text-redLight 
            dark:pc:focus:text-red pc:focus:text-redLight dark:active:text-red 
            active:text-redLight transition ease-out duration-300 deskxl:text-base"
        >
            {getTranslation("privacyPolicy").toUpperCase()}
        </a>
    );
};
