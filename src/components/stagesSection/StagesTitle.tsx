import { useTranslations } from "next-intl";
import { SmallPageTitle } from "../shared/SmallPageTitle";
import { TitleWrapper } from "../shared/TitleWrapper";

export const StagesTitle = () => {
    const getTranslation = useTranslations("Stages");
    return (
        <TitleWrapper className="pc:flex">
            <SmallPageTitle className="min-w-[75px] ml-1 mr-3 h-[21px] flex items-center">
                {getTranslation("pageTitle")}
            </SmallPageTitle>
            <span className="w-[280px] pc:w-auto">
                {getTranslation("mainTitle")}
            </span>
        </TitleWrapper>
    );
};
