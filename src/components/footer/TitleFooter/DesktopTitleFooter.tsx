import { useTranslations } from "next-intl";

export const DesktopTitleFooter = () => {
    const getTranslation = useTranslations("Footer");
    return (
        <div className="hidden pc:block">
            <p>
                {getTranslation("titleFirstWord")}
                <span className="text-purple-100">
                    {getTranslation("titleSecondWord")}
                </span>
                {getTranslation("titleThirdWord")}
            </p>
            <p className="pc:ml-[180px]">
                {getTranslation("titleFourthWord")}
                <span className="text-purple-100">
                    {getTranslation("titleFifthWord")}
                </span>
                {getTranslation("titleSixthWord")}
                <span className="text-purple-100">
                    {getTranslation("titleSeventhWord")}
                </span>
            </p>
        </div>
    );
};
