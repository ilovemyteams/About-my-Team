import { Section } from "../shared/Section";
import { Title } from "./Title";
import { MenuTeamSection } from "./MenuTeamSection";
import { MenuMobileTeamSection } from "./MenuMobileTeamSection";

export const OurTeamSection = () => {
    return (
        <Section id="team">
            <Title />
            <div className="flex flex-col tab:flex-row tab:justify-between pc:h-[584px]">
                <MenuTeamSection />
                <MenuMobileTeamSection />
                <div className="border-[1px] border-purple-stroke">
                    Members cards
                </div>
            </div>
        </Section>
    );
};
