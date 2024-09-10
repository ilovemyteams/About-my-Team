"use client";
import { useTranslations } from "next-intl";

import { SectionCTA } from "@/src/components/shared/SectionCTA";
import { SendUserDataModals } from "@/src/components/shared/SendUserDataModals/SendUserDataModals";
import { TitleCTAWrapper } from "@/src/components/shared/TitleCTAWrapper";

import { FaqCtaForm } from "./form/FaqCtaForm";

export const FaqSectionCta = () => {
    const getTranslation = useTranslations("FaqPage");

    return (
        <SectionCTA className="flex flex-col  tab:flex-row gap-[32px] tab:gap-[90px] items-center tab:justify-between tab:mb-[100px]">
            <TitleCTAWrapper className="tab:flex-1">
                {getTranslation("ctaText")}
            </TitleCTAWrapper>
            <SendUserDataModals
                formComponent={FaqCtaForm}
                triggerBtnTitle={getTranslation("ctaButton")}
            />
        </SectionCTA>
    );
};
