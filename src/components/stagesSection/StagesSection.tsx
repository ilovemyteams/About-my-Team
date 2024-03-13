import { Section } from "../shared/Section";
import { StagesTable } from "./StagesTable";
import { StagesTitle } from "./StagesTitle";

export const StagesSection = () => {
    return (
        <Section id="stages">
            <StagesTitle />
            <StagesTable />
        </Section>
    );
};
