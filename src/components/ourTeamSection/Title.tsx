import { useTranslations } from "next-intl";

import { SmallPageTitle } from "../shared/SmallPageTitle";
import { TitleWrapper } from "../shared/TitleWrapper";

export const Title = () => {
    const getTranslation = useTranslations("OurTeam");
    return (
        <TitleWrapper className="flex flex-col tab:flex-row pc:justify-start pc:items-center">
            <SmallPageTitle className="flex flex-col ml-1 mb-[8px] tab:mt-[6px] pc:mt-0 pc:min-w-[75px] mr-3 pc:h-[21px] pc:flex-row">
                {getTranslation("pageTitle")}
            </SmallPageTitle>
            <p className="tab:max-w-[300px] pc:max-w-[none]">
                {getTranslation("pageBigTitle")}
            </p>
        </TitleWrapper>
    );
};
