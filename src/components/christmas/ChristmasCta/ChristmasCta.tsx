import { useTranslations } from "next-intl";

import { SectionCTA } from "../../shared/SectionCTA";
import { TitleCTAWrapper } from "../../shared/TitleCTAWrapper";
import { ChristmasCtaBtn } from "./ChristmasCtaBtn";

export const ChristmasCta = () => {
    const getTranslation = useTranslations("Christmas");

    return (
        <SectionCTA className="flex flex-col tab:flex-row gap-8 justify-between tab:gap-[90px] desk:gap-[150px]">
            <TitleCTAWrapper>{getTranslation("ctaText")}</TitleCTAWrapper>
            <div className="tab:max-w-[270px] shrink-0 grow-0 flex items-center justify-center">
                <ChristmasCtaBtn />
            </div>
        </SectionCTA>
    );
};
