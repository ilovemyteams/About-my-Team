import { useTranslations } from "next-intl";
import { DeskTitle } from "./DeskTitle";
import { MobTitle } from "./MobTitle";
import { TitleWrapper } from "../../shared/TitleWrapper";
import { SmallPageTitle } from "../../shared/SmallPageTitle";

export const PortfolioTitle = () => {
    const getTranslation = useTranslations("Portfolio");

    return (
        <div>
            <TitleWrapper className="flex flex-col tab:flex-row items-start">
                <SmallPageTitle className="ml-1 mb-[10px] tab:mt-2 tab:mr-4 pc:mt-[14px] flex items-center">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <DeskTitle />
                <MobTitle />
            </TitleWrapper>
        </div>
    );
};
