import { useTranslations } from "next-intl";
import { SmallPageTitle } from "../shared/SmallPageTitle";
import { TitleWrapper } from "../shared/TitleWrapper";

export const Title = () => {
    const getTranslation = useTranslations("OurTeam");
    return (
        <TitleWrapper className="flex items-start">
            <SmallPageTitle className="min-w-[75px] ml-1 mr-3 h-[21px] flex items-center">
                {getTranslation("pageTitle")}
            </SmallPageTitle>
            <p>{getTranslation("pageBigTitle")}</p>
        </TitleWrapper>
    );
};
