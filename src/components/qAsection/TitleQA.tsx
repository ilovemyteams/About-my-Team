import { useTranslations } from "next-intl";
import { TitleWrapper } from "../shared/TitleWrapper";
import { SmallPageTitle } from "../shared/SmallPageTitle";

export const TitleQA = () => {
    const getTranslation = useTranslations("Q&A");
    return (
        <TitleWrapper className="flex flex-col">
            <div className="flex flex-col tab:flex-row justify-between items-center pc:flex-row">
                <SmallPageTitle className="ml-0 mx-auto mr-[10px] tab:mr-3 flex justify-center ">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <span className="w-auto">{getTranslation("pageBigTitle")}</span>
            </div>
        </TitleWrapper>
    );
};
