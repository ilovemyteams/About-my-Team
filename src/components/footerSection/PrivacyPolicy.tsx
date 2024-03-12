import { useTranslations } from "next-intl";

export const PrivacyPolicy = () => {
    const getTranslation = useTranslations("Footer");
    return (
        <a
            href=""
            className="text-sm hover:text-red focus:text-red transition ease-out duration-300"
        >
            {getTranslation("privacyPolicy")}
        </a>
    );
};
