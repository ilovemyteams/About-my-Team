import { useTranslations } from "next-intl";

import { SectionCTA } from "@/src/components/shared/SectionCTA";
import { TitleCTAWrapper } from "@/src/components/shared/TitleCTAWrapper";

import { AskUsModal } from "./modal/AskUsModal";

export const FaqSectionCta = () => {
    const getTranslation = useTranslations("FaqPage");

    return (
        <SectionCTA className="flex flex-col tab:flex-row gap-[32px] tab:gap-[90px] items-center tab:justify-between tab:mb-[100px]">
            <TitleCTAWrapper className="tab:flex-1">
                {getTranslation("ctaText")}
            </TitleCTAWrapper>
            <AskUsModal />
        </SectionCTA>
    );
};
