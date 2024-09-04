"use client";
import { useState } from "react";

import { SectionCTA } from "../shared/SectionCTA";
import { TitleCTAWrapper } from "../shared/TitleCTAWrapper";
import { NotificationModal } from "../shared/WriteUs/NotificationModal";
import { FaqCtaModal } from "./FaqCtaModal";

export const FaqSectionCta = () => {
    const [isError, setIsError] = useState(false);
    const [isNotificationShawn, setIsNotificationShawn] = useState(false);

    return (
        <SectionCTA className="flex flex-col  tab:flex-row gap-[32px] tab:gap-[90px] items-center tab:justify-between tab:mb-[100px]">
            <TitleCTAWrapper className="tab:flex-1">
                Не знайшли відповідь на ваше питання? Напишіть нам і ми надамо
                вам першу консультацію безкоштовно!
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
