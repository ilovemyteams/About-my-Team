import { useTranslations } from "next-intl";
import { TitleWrapper } from "../shared/TitleWrapper";
import { SmallPageTitle } from "../shared/SmallPageTitle";

export const TitleQA = () => {
    const getTranslation = useTranslations("Q&A");
    return (
        <TitleWrapper className="flex flex-col">
            <div className="flex flex-col pc:flex-row">
                <SmallPageTitle className="min-w-[75px] ml-1 mr-3 h-[21px] flex items-center">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <span className="w-[280px] pc:w-auto">
                    {getTranslation("pageBigTitle")}
                </span>
            </div>
        </TitleWrapper>
    );
};
