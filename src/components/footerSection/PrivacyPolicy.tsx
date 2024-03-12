import { useTranslations } from "next-intl";

export const PrivacyPolicy = () => {
    const getTranslation = useTranslations("Footer");
    return (
        <>
            <a href="" className="text-sm">
                {getTranslation("privacyPolicy")}
            </a>
        </>
    );
};
