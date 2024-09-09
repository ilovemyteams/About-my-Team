"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { SectionCTA } from "@/src/components/shared/SectionCTA";
import { TitleCTAWrapper } from "@/src/components/shared/TitleCTAWrapper";
import { NotificationModal } from "@/src/components/shared/WriteUs/NotificationModal";

import { FaqCtaModal } from "./modal/FaqCtaModal";

export const FaqSectionCta = () => {
    const getTranslation = useTranslations("FaqPage");
    const [isError, setIsError] = useState(false);
    const [isNotificationShawn, setIsNotificationShawn] = useState(false);

    return (
        <SectionCTA className="flex flex-col  tab:flex-row gap-[32px] tab:gap-[90px] items-center tab:justify-between tab:mb-[100px]">
            <TitleCTAWrapper className="tab:flex-1">
                {getTranslation("ctaText")}
            </TitleCTAWrapper>
            <FaqCtaModal
                setIsError={setIsError}
                setIsNotification={setIsNotificationShawn}
            />
            <NotificationModal
                isError={isError}
                isNotificationShawn={isNotificationShawn}
                setIsError={setIsError}
                setIsNotificationShawn={setIsNotificationShawn}
            />
        </SectionCTA>
    );
};
