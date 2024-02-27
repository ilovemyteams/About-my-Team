import { Button } from "../shared/Button";
import { Section } from "../shared/Section";
import { BenefitsList } from "./Benefits/BenefitsList";
import { MissionTitle } from "./MissionTitle";
import { StagesList } from "./StagesList";

export const MissionSection = () => {
    return (
        <Section>
            <MissionTitle />
            <div className="flex gap-[90px] justify-center">
                <div className="min-w-[511px] min-h-[530px] ml-[-60px] bg-purple-100"></div>
                <div className="flex flex-col justify-center gap-[84px]">
                    <BenefitsList />
                    <Button className="ml-auto">Button</Button>
                </div>
            </div>
            <StagesList />
        </Section>
    );
};
