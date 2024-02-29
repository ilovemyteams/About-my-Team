import { Section } from "../shared/Section";
import { StagesTable } from "./StagesTable";
import { StagesTitle } from "./StagesTitle";

export const StagesSection = () => {
    return (
        <Section>
            <StagesTitle />
            <StagesTable />
        </Section>
    );
};
