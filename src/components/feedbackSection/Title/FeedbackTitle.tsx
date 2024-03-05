import { useTranslations } from "next-intl";
import { DeskTitle } from "./DeskTitle";
import { MobTitle } from "./MobTitle";
import { TitleWrapper } from "../../shared/TitleWrapper";
import { SmallPageTitle } from "../../shared/SmallPageTitle";

export const FeedbackTitle = () => {
    const getTranslation = useTranslations("Feedback");

    return (
        <div>
            <TitleWrapper className="flex flex-col pc:flex-row items-start">
                <SmallPageTitle className="m-w-16 ml-1 mt-3 mr-3 flex items-center">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <DeskTitle />
                <MobTitle />
            </TitleWrapper>
        </div>
    );
};
