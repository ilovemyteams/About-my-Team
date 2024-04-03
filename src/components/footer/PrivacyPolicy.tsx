import { useTranslations } from "next-intl";

export const PrivacyPolicy = () => {
    const getTranslation = useTranslations("Footer");
    return (
        <a
            href=""
            className="mb-[20px] tab:mb-0 text-sm hover:text-red focus:text-red transition ease-out duration-300 deskxl:text-base"
        >
            {getTranslation("privacyPolicy").toUpperCase()}
        </a>
    );
};
