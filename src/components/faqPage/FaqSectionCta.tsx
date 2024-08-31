import React from "react";

import { Button } from "../shared/Button";
import { SectionCTA } from "../shared/SectionCTA";
import { TitleCTAWrapper } from "../shared/TitleCTAWrapper";

export const FaqSectionCta = () => {
    return (
        <SectionCTA className="flex flex-col  tab:flex-row gap-[32px] tab:gap-[90px] items-center tab:justify-between tab:mb-[100px]">
            <TitleCTAWrapper className="tab:flex-1">
                Не знайшли відповідь на ваше питання? Напишіть нам і ми надамо
                вам першу консультацію безкоштовно!
            </TitleCTAWrapper>
            <Button>написати</Button>
        </SectionCTA>
    );
};
