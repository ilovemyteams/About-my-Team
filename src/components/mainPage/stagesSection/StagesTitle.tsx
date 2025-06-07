import { useTranslations } from "next-intl";

import { SmallPageTitle } from "../../shared/SmallPageTitle";
import { TitleWrapper } from "../../shared/TitleWrapper";

export const StagesTitle = () => {
    const getTranslation = useTranslations("Stages");
    return (
        <TitleWrapper className="tab:flex">
            <SmallPageTitle>{getTranslation("pageTitle")}</SmallPageTitle>
            <p>{getTranslation("mainTitle")}</p>
        </TitleWrapper>
    );
};
