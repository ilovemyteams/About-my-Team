import { SliderSectionType } from "@/src/mockedData/portfolioData";

import { HighlightTitleFromMockedData } from "../../shared/HighlightTitleFromMockedData";
import { Section } from "../../shared/Section";
import { DecisionCard } from "./DecisionCard";

export const DecisionSection = ({
    decision,
}: {
    decision: SliderSectionType;
}) => {
    const title = decision.title;
    const data = decision.data;
    console.log("🚀 ~ data:", data[0]);

    return (
        <Section>
            <HighlightTitleFromMockedData text={title} />
            <DecisionCard data={data[3]} />
        </Section>
    );
};
