import { useTranslations } from "next-intl";

export const MobileTitle = () => {
    const getTranslation = useTranslations("Mission");

    return (
        <p className="tab:hidden">
            <span className="text-purple-100">
                {getTranslation("titleZeroWord")}
            </span>
            {getTranslation("titleFirstWord")}
            <span className="text-purple-100">
                {getTranslation("titleSecondWord")}
            </span>
            {getTranslation("titleThirdWord")}
            <span className="text-purple-100">
                {getTranslation("titleFourthWord")}
            </span>
            <span className="text-purple-100">
                {getTranslation("titleFifthWord")}
            </span>
            {getTranslation("titleOtherWords")}
        </p>
    );
};
