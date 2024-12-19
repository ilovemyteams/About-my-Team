import { useTranslations } from "next-intl";

import { SmallPageTitle } from "../shared/SmallPageTitle";
import { TitleWrapper } from "../shared/TitleWrapper";

export const Title = () => {
    const getTranslation = useTranslations("OurTeam");
    return (
        <TitleWrapper className="flex flex-col tab:flex-row pc:justify-start">
            <SmallPageTitle>{getTranslation("pageTitle")}</SmallPageTitle>
            <p className="tab:max-w-[300px] pc:max-w-[none]">
                {getTranslation("pageBigTitle")}
            </p>
        </TitleWrapper>
    );
};
