import { useTranslations } from "next-intl";

import { ColoredTitle } from "../shared/ColoredTitle";
import { SmallPageTitle } from "../shared/SmallPageTitle";
import { TitleWrapper } from "../shared/TitleWrapper";

export const FeedbackTitle = () => {
    const getTranslation = useTranslations("Feedback");
    const titleNames = ["titleFirstLine", "titleSecondLine"];

    return (
        <div>
            <TitleWrapper>
                <SmallPageTitle className="tab:float-start ml-1 mr-3 tab:mt-2 tab:mr-[16px] pc:mt-[14px]">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <ColoredTitle categoryName="Feedback" propName={titleNames} />
            </TitleWrapper>
        </div>
    );
};
