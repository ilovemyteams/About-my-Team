import { useTranslations } from "next-intl";

export const TabTitle = () => {
    const getTranslation = useTranslations("Portfolio");
    return (
        <div className="hidden tab:block desk:hidden">
            <p>
                {getTranslation("titleFirstWord")}
                <span className="text-purple-100">
                    {getTranslation("titleSecondWord")}
                </span>
                ,
            </p>
            <p className="tab:-ml-[100px] pc:ml-0">
                {getTranslation("titleThirdWord")}
                <span className="text-purple-100">
                    {getTranslation("titleFourthWord")}
                </span>
                {getTranslation("titleFifthWord")}
            </p>
            <p className="-ml-[100px] max-w-[700px] pc:max-w-[900px]">
                {getTranslation("titleSixthWord")}
                <span className="text-purple-100">
                    {getTranslation("titleSeventhWord")}
                </span>
            </p>
        </div>
    );
};
