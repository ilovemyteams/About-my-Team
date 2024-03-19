import { useTranslations } from "next-intl";

export const DeskTitle = () => {
    const getTranslation = useTranslations("Portfolio");
    return (
        <div className="hidden tab:block">
            <p>
                {getTranslation("titleFirstWord")}
                <span className="text-purple-100">
                    {getTranslation("titleSecondWord")}
                </span>
                ,
            </p>
            <p className="tab:-ml-[105px] pc:ml-0">
                {getTranslation("titleThirdWord")}
                <span className="text-purple-100">
                    {getTranslation("titleFourthWord")}
                </span>
                {getTranslation("titleFifthWord")}
            </p>
            <p className="-ml-[105px]">
                {getTranslation("titleSixthWord")}
                <span className="text-purple-100">
                    {getTranslation("titleSeventhWord")}
                </span>
            </p>
        </div>
    );
};
