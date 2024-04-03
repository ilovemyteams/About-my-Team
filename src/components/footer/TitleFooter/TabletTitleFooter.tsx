import { useTranslations } from "next-intl";

export const TabletTitleFooter = () => {
    const getTranslation = useTranslations("Footer");
    return (
        <div className="hidden tab:block pc:hidden">
            <p>
                {getTranslation("titleFirstWord")}
                <span className="text-purple-100">
                    {getTranslation("titleSecondWord")}
                </span>
                {getTranslation("titleThirdWord")}
            </p>
            <p className="ml-[133px]">
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
