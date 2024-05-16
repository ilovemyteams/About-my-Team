import { useTranslations } from "next-intl";

export const TabletDesktopTitle = () => {
    const getTranslation = useTranslations("Mission");
    return (
        <div className="hidden tab:block">
            <p>
                <span className="text-purple-100">
                    {getTranslation("titleZeroWord")}
                </span>
                {getTranslation("titleFirstWord")}
                <span className="text-purple-100">
                    {getTranslation("titleSecondWord")}
                </span>
            </p>
            <p>
                {getTranslation("titleThirdWord")}
                <span className="text-purple-100">
                    {getTranslation("titleFourthWord")}
                </span>
            </p>
            <p className="ml-[82px] pc:ml-[167px]">
                <span className="text-purple-100">
                    {getTranslation("titleFifthWord")}
                </span>
                {getTranslation("titleOtherWords")}
            </p>
        </div>
    );
};
