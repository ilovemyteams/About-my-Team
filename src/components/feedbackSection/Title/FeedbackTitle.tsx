import { useTranslations } from "next-intl";

import { SmallPageTitle } from "../../shared/SmallPageTitle";
import { TitleWrapper } from "../../shared/TitleWrapper";
import { DeskTitle } from "./DeskTitle";
import { MobTitle } from "./MobTitle";

export const FeedbackTitle = () => {
    const getTranslation = useTranslations("Feedback");

    return (
        <div>
            <TitleWrapper className="flex flex-col tab:flex-row items-start">
                <SmallPageTitle className="ml-1 mr-3  tab:mt-2 tab:mr-[16px] pc:mt-[14px] flex items-center">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <MobTitle />
                <DeskTitle />
            </TitleWrapper>
        </div>
    );
};
