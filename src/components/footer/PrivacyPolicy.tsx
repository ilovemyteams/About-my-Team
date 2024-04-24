import { useTranslations } from "next-intl";

export const PrivacyPolicy = () => {
    const getTranslation = useTranslations("Footer");
    return (
        <a
            href=""
            className="mb-[20px] tab:mb-0 text-sm dark:pc:hover:text-red pc:hover:text-redLight 
            dark:pc:focus:text-red pc:focus:text-redLightdark:active:text-red 
            active:text-redLight transition ease-out duration-300 deskxl:text-base"
        >
            {getTranslation("privacyPolicy").toUpperCase()}
        </a>
    );
};
