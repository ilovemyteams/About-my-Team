import { useTranslations } from "next-intl";
import { DeskTitle } from "./DeskTitle";
import { MobTitle } from "./MobTitle";
import { TitleWrapper } from "../../shared/TitleWrapper";
import { SmallPageTitle } from "../../shared/SmallPageTitle";

export const PortfolioTitle = () => {
    const getTranslation = useTranslations("Portfolio");

    return (
        <div>
            <TitleWrapper className="flex flex-col pc:flex-row items-start">
                <SmallPageTitle className="ml-1 mr-3 mt-3 flex items-center">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <DeskTitle />
                <MobTitle />
            </TitleWrapper>
        </div>
    );
};
