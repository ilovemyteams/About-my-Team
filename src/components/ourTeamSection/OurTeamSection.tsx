import { Section } from "../shared/Section";
import { Title } from "./Title";
import { MenuTeamSection } from "./MenuTeamSection";
import { MenuMobileTeamSection } from "./MenuMobileTeamSection";

export const OurTeamSection = () => {
    return (
        <Section id="team">
            <Title />
            <div className="flex justify-between h-[584px]">
                <MenuTeamSection />
                <div className="border-[1px] border-purple-stroke">
                    Members cards
                </div>
            </div>
            <MenuMobileTeamSection />
        </Section>
    );
};
