import { useTranslations } from "next-intl";

export const MobTitle = () => {
    const getTranslation = useTranslations("Portfolio");

    return (
        <>
            <p className="pc:hidden">{getTranslation("titleMobFirst")}</p>
            <p className="pc:hidden">{getTranslation("titleMobSecond")}</p>
        </>
    );
};
