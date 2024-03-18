import { useTranslations } from "next-intl";
import { SmallPageTitle } from "../shared/SmallPageTitle";
import { TitleWrapper } from "../shared/TitleWrapper";

export const StagesTitle = () => {
    const getTranslation = useTranslations("Stages");
    return (
        <TitleWrapper className="tab:flex">
            <SmallPageTitle className="min-w-[75px] ml-1 mr-3 flex items-center">
                {getTranslation("pageTitle")}
            </SmallPageTitle>
            <span className="w-[280px] tab:w-auto">
                {getTranslation("mainTitle")}
            </span>
        </TitleWrapper>
    );
};
