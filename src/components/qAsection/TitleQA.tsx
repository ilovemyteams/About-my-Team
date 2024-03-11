import { useTranslations } from "next-intl";
import { TitleWrapper } from "../shared/TitleWrapper";
import { SmallPageTitle } from "../shared/SmallPageTitle";

export const TitleQA = () => {
    const getTranslation = useTranslations("Q&A");
    return (
        <TitleWrapper className="flex flex-col">
            <div className="flex flex-col items-center pc:flex-row">
                <SmallPageTitle className="my-0 mx-auto pr-[10px] flex justify-center">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <span className="w-[280px] pc:w-auto">
                    {getTranslation("pageBigTitle")}
                </span>
            </div>
        </TitleWrapper>
    );
};
