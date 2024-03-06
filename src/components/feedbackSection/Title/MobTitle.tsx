import { useTranslations } from "next-intl";

export const MobTitle = () => {
    const getTranslation = useTranslations("Feedback");

    return <p className="pc:hidden">{getTranslation("titleMob")}</p>;
};
