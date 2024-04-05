"use client";

import { Section } from "../shared/Section";
import { Title } from "./Title";
import { MenuTeamSection } from "./MenuTeamSection";
import { MemberCard } from "./MemberCard";
import { membersData } from "./data/membersData";

export const OurTeamSection = () => {
    console.log(membersData);
    return (
        <Section id="team">
            <Title />
            <div className="flex flex-col tab:flex-row tab:justify-between pc:h-[584px]">
                <MenuTeamSection />
                <div className="border-[1px] border-purple-stroke">
                    <MemberCard data={membersData[0]} />
                </div>
            </div>
        </Section>
    );
};
