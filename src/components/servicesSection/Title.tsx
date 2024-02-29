import { useTranslations } from "next-intl";
import { SmallPageTitle } from "../shared/SmallPageTitle";
import { TitleWrapper } from "../shared/TitleWrapper";

export const Title = () => {
    const getTranslation = useTranslations("Services");
    return (
        <TitleWrapper className="flex flex-col">
            <div className="flex flex-col pc:flex-row">
                <SmallPageTitle className="min-w-[75px] ml-1 mr-3 h-[21px] flex items-center">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <span className="w-[280px] pc:w-auto">
                    {getTranslation("titleFirstRow")}
                </span>
            </div>
            <span>{getTranslation("titleSecondRow")}</span>
        </TitleWrapper>
    );
};
