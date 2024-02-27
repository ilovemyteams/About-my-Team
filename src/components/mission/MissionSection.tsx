import { Button } from "../shared/Button";
import { Section } from "../shared/Section";
import { BenefitsList } from "./Benefits/BenefitsList";
import { MissionTitle } from "./MissionTitle";
import { StagesList } from "./StagesList";

export const MissionSection = () => {
    return (
        <Section>
            <MissionTitle />
            <div className="relative flex flex-col justify-start items-end gap-y-[84px] ">
                <div className="absolute top-[-64px] left-0 w-[511px] h-[530px] ml-[-60px] bg-purple-100"></div>
                <BenefitsList />
                <Button className="">Button</Button>
            </div>

            <StagesList />
        </Section>
    );
};
