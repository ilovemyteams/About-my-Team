"use client";

import { Section } from "../shared/Section";
import { Title } from "./Title";
import { MenuTeamSection } from "./MenuTeamSection";
import { MenuTeamSectionMobile } from "./MenuTeamSectionMobile";
import { useEffect, useState } from "react";
import { MemberCardsList } from "./MemberCardsList";
import { membersData } from "./data/membersData";
import { portfolioData } from "../shared/mockedData/portfolioData";

//TODO: INITIAL_OPTIONS will be changed on fetch from portfolio data
const INITIAL_OPTIONS = {
    optionName: "i Love My Team",
    optionValue: "1",
    optionType: "team",
};

export const OurTeamSection = () => {
    const [selectedOption, setSelectedOption] = useState(INITIAL_OPTIONS);
    const [filteredData, setFilteredData] = useState(membersData);

    useEffect(() => {
        if (selectedOption.optionType === "person") {
            const filtered = membersData.filter(
                member =>
                    member.data.categoryName === selectedOption.optionValue
            );

            setFilteredData(filtered);
        } else {
            const project = portfolioData.find(
                project => project.data.id === selectedOption.optionValue
            );
            if (project) {
                const filteredMembers = membersData.filter(member => {
                    return member.data.projectId.includes(project.data.id);
                });

                setFilteredData(filteredMembers);
            } else {
                setFilteredData([]);
            }
        }
    }, [selectedOption]);
    return (
        <Section id="team">
            <Title />
            <div className="flex flex-col gap-6 tab:flex-row tab:justify-between">
                <MenuTeamSectionMobile
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                />
                <MenuTeamSection />
                <MemberCardsList membersData={filteredData} />
            </div>
        </Section>
    );
};
