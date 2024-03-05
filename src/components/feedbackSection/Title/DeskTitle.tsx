import { useTranslations } from "next-intl";

export const DeskTitle = () => {
    const getTranslation = useTranslations("Feedback");
    return (
        <div className="hidden pc:block">
            <p>
                {getTranslation("titleFirstWord")}
                <span className="pc:text-purple-100">
                    {getTranslation("titleSecondWord")}
                </span>
            </p>
            <p>
                {getTranslation("titleThirdWord")}
                <span className="pc:text-purple-100">
                    {getTranslation("titleFourthWord")}
                </span>
            </p>
        </div>
    );
};
