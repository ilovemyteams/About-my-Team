import { Button } from "../shared/Button";
import { Section } from "../shared/Section";
import { BenefitsList } from "./Benefits/BenefitsList";
import { MissionTitle } from "./Title/MissionTitle";
import { StagesList } from "./StagesList";

export const MissionSection = () => {
    return (
        <Section>
            <MissionTitle />
            <div className="relative flex flex-col justify-start items-center pc:items-end gap-y-[40px] pc:gap-y-[84px] ">
                <BenefitsList />
                <Button className="">Button</Button>
            </div>
            <StagesList />
        </Section>
    );
};
