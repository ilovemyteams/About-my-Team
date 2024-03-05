import { useTranslations } from "next-intl";
import { TitleCTAWrapper } from "../shared/TitleCTAWrapper";
import { SmallPageTitle } from "../shared/SmallPageTitle";

export const HireUsTitle = () => {
    const getTranslation = useTranslations("HireUs");
    return (
        <div className="flex flex-col pc:flex-row items-start">
            <SmallPageTitle className="ml-1 mr-3 mt-[7px] flex items-center">
                {getTranslation("pageTitle")}
            </SmallPageTitle>
            <TitleCTAWrapper className="pc:w-[70%]">
                {getTranslation("title")}
            </TitleCTAWrapper>
        </div>
    );
};
