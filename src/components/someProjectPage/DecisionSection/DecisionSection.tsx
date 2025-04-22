import { EmblaOptionsType } from "embla-carousel";

import { SliderSectionType } from "@/src/mockedData/portfolioData";

import { HighlightTitleFromMockedData } from "../../shared/HighlightTitleFromMockedData";
import { Section } from "../../shared/Section";
import { DecisionSlider } from "./DecisionSlider";

export const DecisionSection = ({
    decision,
}: {
    decision: SliderSectionType;
}) => {
    const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };
    const title = decision.title;
    const data = decision.data;

    return (
        <Section>
            <HighlightTitleFromMockedData text={title} />
            <DecisionSlider decisions={data} options={OPTIONS} />
        </Section>
    );
};
