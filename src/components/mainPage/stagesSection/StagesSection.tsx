import { EggContainer } from "../../easter/EggsHunt/EggContainer";
import { Section } from "../../shared/Section";
import { StagesTable } from "./StagesTable";
import { StagesTitle } from "./StagesTitle";

export const StagesSection = () => {
    return (
        <Section id="stages" className=" relative">
            <EggContainer count={3} />
            <StagesTitle />
            <StagesTable />
        </Section>
    );
};
