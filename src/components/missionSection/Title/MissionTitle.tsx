import { useTranslations } from "next-intl";

import { SmallPageTitle } from "../../shared/SmallPageTitle";
import { TitleWrapper } from "../../shared/TitleWrapper";
import { MobileTitle } from "./MobileTitle";
import { TabletDesktopTitle } from "./TabletDesktopTitle";

export const MissionTitle = () => {
    const getTranslation = useTranslations("Mission");

    return (
        <>
            <TitleWrapper className="flex flex-col tab:flex-row items-start">
                <SmallPageTitle className="ml-1 mr-3 tab:mt-2 pc:mt-4 flex items-center">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <TabletDesktopTitle />
                <MobileTitle />
            </TitleWrapper>
        </>
    );
};
