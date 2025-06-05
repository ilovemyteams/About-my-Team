import { useTranslations } from "next-intl";

import { SmallPageTitle } from "../../shared/SmallPageTitle";
import { TitleWrapper } from "../../shared/TitleWrapper";

export const TitleQA = () => {
    const getTranslation = useTranslations("Q&A");
    return (
        <TitleWrapper className="tab:flex">
            <SmallPageTitle>{getTranslation("pageTitle")}</SmallPageTitle>

            <p className="tab:max-w-[600px] pc:max-w-[700px] desk:max-w-[900px]">
                {getTranslation("pageBigTitle")}
            </p>
        </TitleWrapper>
    );
};
