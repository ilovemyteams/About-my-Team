import { useTranslations } from "next-intl";
import { SmallPageTitle } from "../shared/SmallPageTitle";
import { TitleWrapper } from "../shared/TitleWrapper";

export const Title = () => {
    const getTranslation = useTranslations("Services");
    return (
        <TitleWrapper className="flex flex-col">
            <div className="flex flex-col tab:flex-row">
                <SmallPageTitle className="min-w-[75px] ml-1 mr-3 flex items-center">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <div className="w-[280px] tab:w-auto">
                    <span>{getTranslation("titleFirstRow1")}</span>
                    <span className="text-purple-100">
                        <span className="hidden pc:inline-block w-1">
                            &nbsp;
                        </span>
                        {getTranslation("titleFirstRow2")}
                    </span>
                </div>
            </div>
            <span>{getTranslation("titleSecondRow")}</span>
        </TitleWrapper>
    );
};
