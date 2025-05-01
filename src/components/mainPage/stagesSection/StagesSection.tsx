import { Section } from "../../shared/Section";
import { StagesTable } from "./StagesTable";
import { StagesTableMob } from "./StagesTableMob";
import { StagesTitle } from "./StagesTitle";

export const StagesSection = () => {
    return (
        <Section id="stages" className=" relative">
            <StagesTitle />
            <div className="tab:hidden">
                <StagesTableMob />
            </div>
            <div className="hidden tab:block ">
                <StagesTable />
            </div>
        </Section>
    );
};
