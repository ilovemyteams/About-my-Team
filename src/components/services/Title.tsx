import { useTranslations } from "next-intl";
import { SmallPageTitle } from "../shared/SmallPageTitle";

export const Title = () => {
    const getTranslation = useTranslations("Services");
    return (
        <h2 className="font-caviar text-3xl mb-4 pc:text-5xl pc:flex flex-col pc:mb-16">
            <div className="flex flex-col pc:flex-row">
                <SmallPageTitle className="min-w-[75px] ml-1 mr-3 h-[21px] flex items-center">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <span className="w-[280px] pc:w-auto">
                    {getTranslation("titleFirstRow")}
                </span>
            </div>
            <span>{getTranslation("titleSecondRow")}</span>
        </h2>
    );
};
