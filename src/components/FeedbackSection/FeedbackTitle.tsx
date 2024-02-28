import { useTranslations } from "next-intl";
import { TitleWrapper } from "../shared/TitleWrapper";
import { SmallPageTitle } from "../shared/SmallPageTitle";
import { DeskTitle } from "./DeskTitle";
import { MobTitle } from "./MobTitle";

export const FeedbackTitle = () => {
    const getTranslation = useTranslations("Feedback");

    return (
        <div>
            <TitleWrapper className="flex flex-col pc:flex-row items-start">
                <SmallPageTitle className="ml-1 mr-3 flex items-center">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <DeskTitle />
                <MobTitle />
            </TitleWrapper>
        </div>
    );
};
