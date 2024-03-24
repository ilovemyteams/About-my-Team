import { useTranslations } from "next-intl";

export const MobTitle = () => {
    const getTranslation = useTranslations("Feedback");

    return (
        <div className="tab:hidden">
            <p>
                {getTranslation("titleFirstWord")}
                <span className="text-purple-100">
                    {getTranslation("titleSecondWord")}
                </span>
                {getTranslation("titleThirdWord")}
                <span className="text-purple-100">
                    {getTranslation("titleFourthWord")}
                </span>
            </p>
        </div>
    );
};
