import { useTranslations } from "next-intl";
import { TitleWrapper } from "../../shared/TitleWrapper";
import { SmallPageTitle } from "../../shared/SmallPageTitle";
import { MobileBigTitleQa } from "./MobileBigTitleQa";

export const TitleQA = () => {
    const getTranslation = useTranslations("Q&A");
    return (
        <TitleWrapper className="flex flex-col pc:justify-start pc:items-center">
            <div className="flex flex-col tab:flex-row justify-between items-start pc:flex-row">
                <SmallPageTitle className="ml-1 mr-[10px] mt-2 pc:mt-[14px] tab:mr-3 flex  ">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <span className="hidden tab:block w-auto  tab:max-w-[600px] pc:max-w-[700px] desk:max-w-[900px]">
                    {getTranslation("pageBigTitle")}
                </span>
                <MobileBigTitleQa />
            </div>
        </TitleWrapper>
    );
};
