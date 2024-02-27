import { Button } from "../shared/Button";
import { Section } from "../shared/Section";
import { BenefitsList } from "./BenefitsList";
import { MissionTitle } from "./MissionTitle";

export const MissionSection = () => {
    return (
        <Section>
            <MissionTitle />
            <div className="flex gap-[90px] justify-center">
                <div className="min-w-[511px] min-h-[530px] ml-[-60px] bg-purple-100"></div>{" "}
                <div className="flex flex-col justify-center gap-[109px]">
                    <BenefitsList />
                    <Button className="ml-auto">Button</Button>
                </div>
            </div>
        </Section>
    );
};
