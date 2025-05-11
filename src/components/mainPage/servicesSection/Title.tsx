import { useTranslations } from "next-intl";

import { ColoredTitle } from "../../shared/ColoredTitle";
import { SmallPageTitle } from "../../shared/SmallPageTitle";
import { TitleWrapper } from "../../shared/TitleWrapper";

export const Title = () => {
    const getTranslation = useTranslations("Services");

    return (
        <TitleWrapper>
            <SmallPageTitle className="tab:float-left">
                {getTranslation("pageTitle")}
            </SmallPageTitle>
            <ColoredTitle
                categoryName="Services"
                propName={["titleFirstLine", "titleSecondLine"]}
            />
        </TitleWrapper>
    );
};
