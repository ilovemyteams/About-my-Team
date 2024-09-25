import { useTranslations } from "next-intl";

export const MobileTitleFooter = () => {
    const getTranslation = useTranslations("Footer");
    return (
        <div className="tab:hidden w-[87%]">
            <p>
                {getTranslation("titleFirstWord")}
                <span className="text-purple-100">
                    {getTranslation("titleSecondWord")}
                </span>
            </p>
            <p className="pc:ml-[180px]">
                {getTranslation("titleThirdWord")}
                <span className="text-purple-100">
                    {getTranslation("titleFourthWord")}
                    {getTranslation("titleFifthWord")}
                </span>
            </p>
            <p>
                {getTranslation("titleSixthWord")}
                <span className="text-purple-100">
                    {getTranslation("titleSeventhWord")}
                </span>
            </p>
        </div>
    );
};
