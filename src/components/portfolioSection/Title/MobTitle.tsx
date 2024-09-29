import { useTranslations } from "next-intl";

export const MobTitle = () => {
    const getTranslation = useTranslations("Portfolio");

    return (
        <div className="tab:hidden">
            <p>
                {getTranslation("titleFirstWord")}
                <span className="text-purple-100">
                    {getTranslation("titleSecondWord")}
                </span>
                ,{getTranslation("titleThirdWord")}
                <span className="text-purple-100">
                    {getTranslation("titleFourthWord")}
                </span>
                {getTranslation("titlePartForMob")}
                <span className="text-purple-100">
                    {getTranslation("titleSeventhWord")}
                </span>
            </p>
        </div>
    );
};
