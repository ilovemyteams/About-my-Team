import { useTranslations } from "next-intl";
import { TitleWrapper } from "../../shared/TitleWrapper";
import { SmallPageTitle } from "../../shared/SmallPageTitle";
import { MobTitle } from "./MobTitle";
import { DeskTitle } from "./DeskTitle";

export const FeedbackTitle = () => {
    const getTranslation = useTranslations("Feedback");

    return (
        <div>
            <TitleWrapper className="flex flex-col tab:flex-row items-start">
                <SmallPageTitle className="ml-1 mr-3 mt-3 flex items-center">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <MobTitle />
                <DeskTitle />
            </TitleWrapper>
        </div>
    );
};
