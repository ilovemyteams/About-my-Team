import { useTranslations } from "next-intl";

import { ColoredTitle } from "../shared/ColoredTitle";
import { SmallPageTitle } from "../shared/SmallPageTitle";
import { TitleWrapper } from "../shared/TitleWrapper";

export const Title = () => {
    const getTranslation = useTranslations("Services");
    const titleNames = ["titleFirstLine", "titleSecondLine"];
    return (
        <TitleWrapper>
            <SmallPageTitle className="tab:float-left">
                {getTranslation("pageTitle")}
            </SmallPageTitle>
            <ColoredTitle categoryName="Services" propName={titleNames} />
        </TitleWrapper>
    );
};
