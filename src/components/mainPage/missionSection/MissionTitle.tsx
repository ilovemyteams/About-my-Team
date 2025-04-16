import { useTranslations } from "next-intl";

import { ColoredTitle } from "../../shared/ColoredTitle";
import { SmallPageTitle } from "../../shared/SmallPageTitle";
import { TitleWrapper } from "../../shared/TitleWrapper";

export const MissionTitle = () => {
    const getTranslation = useTranslations("Mission");

    const titleNames = ["titleFirstLine", "titleSecondLine", "titleThirdLine"];
    return (
        <>
            <TitleWrapper className="flex flex-col tab:flex-row items-start">
                <SmallPageTitle>{getTranslation("pageTitle")}</SmallPageTitle>

                <ColoredTitle
                    categoryName="Mission"
                    propName={titleNames}
                    className="tab:[&:nth-child(3)]:ml-[82px] pc:[&:nth-child(3)]:ml-[167px]"
                />
            </TitleWrapper>
        </>
    );
};
