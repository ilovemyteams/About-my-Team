import { useTranslations } from "next-intl";

export const TabletTitleFooter = () => {
    const getTranslation = useTranslations("Footer");
    return (
        <div className="hidden tab:block tab:mb-[122px] pc:hidden">
            <p>
                {getTranslation("titleFirstWord")}
                <span className="pc:text-purple-100">
                    {getTranslation("titleSecondWord")}
                </span>
                {getTranslation("titleThirdWord")}
            </p>
            <p className="pc:ml-[180px]">
                {getTranslation("titleFourthWord")}
                <span className="pc:text-purple-100">
                    {getTranslation("titleFifthWord")}
                </span>
                {getTranslation("titleSixthWord")}
                <span className="pc:text-purple-100">
                    {getTranslation("titleSeventhWord")}
                </span>
            </p>
        </div>
    );
};
