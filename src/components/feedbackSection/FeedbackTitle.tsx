import { useTranslations } from "next-intl";

import { ColoredTitle } from "../shared/ColoredTitle";
import { SmallPageTitle } from "../shared/SmallPageTitle";
import { TitleWrapper } from "../shared/TitleWrapper";

export const FeedbackTitle = () => {
    const getTranslation = useTranslations("Feedback");
    const titleNames = ["titleFirstLine", "titleSecondLine"];
    const isBigTitle = titleNames.length === 3;

    return (
        <div>
            <TitleWrapper>
                <SmallPageTitle
                    isBigTitle={isBigTitle}
                    className="tab:float-start"
                >
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <ColoredTitle categoryName="Feedback" propName={titleNames} />
            </TitleWrapper>
        </div>
    );
};
