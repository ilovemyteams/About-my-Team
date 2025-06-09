import { useTranslations } from "next-intl";

import { SectionCTA } from "../shared/SectionCTA";
import { TitleCTAWrapper } from "../shared/TitleCTAWrapper";
import { WriteUs } from "../shared/WriteUs/WriteUs";

export const CtaServicesSection = () => {
    const getTranslation = useTranslations("ServicesPage");

    return (
        <SectionCTA
            className={`flex flex-col tab:flex-row gap-[32px] tab:gap-[90px] items-center tab:justify-between tab:mb-[100px]`}
        >
            <TitleCTAWrapper className="tab:flex-1">
                {getTranslation("ctaText")}
            </TitleCTAWrapper>
            <WriteUs />
        </SectionCTA>
    );
};
