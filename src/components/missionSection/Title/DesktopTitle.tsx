import { useTranslations } from "next-intl";

export const DesktopTitle = () => {
    const getTranslation = useTranslations("Mission");
    return (
        <div className="hidden pc:block">
            <p>
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
            <p className="pc:ml-[167px]">
                <span className="text-purple-100">
                    {getTranslation("titleFifthWord")}
                </span>
                {getTranslation("titleOtherWords")}
            </p>
        </div>
    );
};
