import { SliderSectionType } from "@/src/mockedData/portfolioData";

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
        <div>
            <h2>{title}</h2>
            <DecisionCard data={data[3]} />
            <p>This is the decision section of the project.</p>
        </div>
    );
};
