import { useTranslations } from "next-intl";

export const MobileTitle = () => {
    const getTranslation = useTranslations("Mission");

    return <p className="pc:hidden">{getTranslation("titleMobile")}</p>;
};
