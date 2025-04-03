import { useTranslations } from "next-intl";

import { ColoredTitle } from "../../shared/ColoredTitle";
import { SmallPageTitle } from "../../shared/SmallPageTitle";
import { TitleWrapper } from "../../shared/TitleWrapper";

export const PortfolioTitle = () => {
    const getTranslation = useTranslations("Portfolio");
    const titleNames = ["titleFirstLine", "titleSecondLine", "titleThirdLine"];
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

                <ColoredTitle categoryName="Portfolio" propName={titleNames} />
            </TitleWrapper>
        </div>
    );
};
