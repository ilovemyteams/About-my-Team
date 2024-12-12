import { useTranslations } from "next-intl";

import { ColoredTitle } from "../shared/ColoredTitle";
import { SmallPageTitle } from "../shared/SmallPageTitle";
import { TitleWrapper } from "../shared/TitleWrapper";

export const PortfolioTitle = () => {
    const getTranslation = useTranslations("Portfolio");
    const titleNames = ["titleFirstLine", "titleSecondLine", "titleThirdLine"];
    return (
        <div>
            <TitleWrapper>
                <SmallPageTitle className="tab:float-start ml-1 mb-[10px] tab:mt-2 tab:mr-4 pc:mb-[60px] pc:mt-[14px]">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>

                <ColoredTitle categoryName="Portfolio" propName={titleNames} />
            </TitleWrapper>
        </div>
    );
};
