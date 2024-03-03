import { useTranslations } from "next-intl";

export const DeskTitle = () => {
    const getTranslation = useTranslations("Portfolio");
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
                {getTranslation("titleFifthWord")}
            </p>
            <p>
                {getTranslation("titleSixthWord")}
                <span className="pc:text-purple-100">
                    {getTranslation("titleSeventhWord")}
                </span>
            </p>
        </div>
    );
};
