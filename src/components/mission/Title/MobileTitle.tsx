import { useTranslations } from "next-intl";

export const MobileTitle = () => {
    const getTranslation = useTranslations("Mission");
    return (
        <p className="pc:hidden">
            {getTranslation("titleFirstWord")}
            {getTranslation("titleSecondWord")}
            {getTranslation("titleThirdWord")}
            {getTranslation("titleFourthWord")}
            {getTranslation("titleFifthWord")}
            {getTranslation("titleOtherWords")}
        </p>
    );
};
