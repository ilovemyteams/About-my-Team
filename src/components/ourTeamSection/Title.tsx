import { useTranslations } from "next-intl";
import { SmallPageTitle } from "../shared/SmallPageTitle";
import { TitleWrapper } from "../shared/TitleWrapper";

export const Title = () => {
    const getTranslation = useTranslations("OurTeam");
    return (
        <TitleWrapper className="flex flex-col pc:flex-row pc:justify-start pc:items-center">
            <SmallPageTitle className="flex flex-col ml-0 mb-[8px] pc:min-w-[75px]  pc:ml-1 mr-3 pc:h-[21px] pc:flex-row">
                {getTranslation("pageTitle")}
            </SmallPageTitle>
            <p>{getTranslation("pageBigTitle")}</p>
        </TitleWrapper>
    );
};
