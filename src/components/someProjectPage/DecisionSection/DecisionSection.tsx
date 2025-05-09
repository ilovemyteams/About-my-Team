import { EmblaOptionsType } from "embla-carousel";

import { DecisionType } from "@/src/mockedData/portfolioData";

import { HighlightTitleFromMessages } from "../../shared/HighlightTitleFromMessages";
import { Section } from "../../shared/Section";
import { DecisionSlider } from "./DecisionSlider";

export const DecisionSection = ({
    decisions,
}: {
    decisions: DecisionType[];
}) => {
    const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };

    return (
        <Section>
            <HighlightTitleFromMessages
                title="SomeProjectPage"
                text="decisionsTitle"
                className="mb-6 tab:mb-10 pc:mb-[64px]"
            />
            <DecisionSlider decisions={decisions} options={OPTIONS} />
        </Section>
    );
};
