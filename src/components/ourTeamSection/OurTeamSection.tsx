"use client";

import { Section } from "../shared/Section";
import { Title } from "./Title";
import { MenuTeamSection } from "./MenuTeamSection";
import { MemberCard } from "./MemberCard";
import { membersData } from "./data/membersData";
import { MenuTeamSectionMobile } from "./MenuTeamSectionMobile";
import { useState } from "react";

//TODO: INITIAL_OPTIONS will be changed on fetch from portfolio data
const INITIAL_OPTIONS = {
    optionName: "I love my team",
    optionValue: "1",
};

export const OurTeamSection = () => {
    const [selectedOption, setSelectedOption] = useState(INITIAL_OPTIONS);

    return (
        <Section id="team">
            <Title />
            <div className="flex flex-col tab:flex-row tab:justify-between pc:h-[584px]">
                <MenuTeamSectionMobile
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                />
                <MenuTeamSection />
                <div className="border-[1px] border-purple-stroke">
                    <MemberCard data={membersData[0]} />
                </div>
            </div>
        </Section>
    );
};
