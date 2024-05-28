"use client";

import { Section } from "../shared/Section";
import { Title } from "./Title";
import { MenuTeamSection } from "./MenuTeamSection";
import { useEffect, useState } from "react";
import { MemberCardsList } from "./MemberCardsList";
import { membersData } from "../../mockedData/membersData";
import { portfolioData } from "../../mockedData/portfolioData";
import { MemberCardsListBigScreens } from "./MemberCardsListBigScreens";

//TODO: INITIAL_OPTIONS will be changed on fetch from portfolio data
const INITIAL_OPTIONS = {
    optionName: "i love my team",
    optionValue: "1",
    optionType: "team",
};

export const OurTeamSection = () => {
    const [selectedOption, setSelectedOption] = useState(INITIAL_OPTIONS);
    const defaultMembersData = membersData.filter(member => {
        return member.data.projectId.includes("1");
    });
    const [filteredData, setFilteredData] = useState(defaultMembersData);

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
            <div className="flex flex-col gap-3 tab:flex-row tab:justify-between">
                <MenuTeamSection
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                />
                <MemberCardsList
                    membersData={filteredData}
                    optionType={selectedOption.optionType}
                />
                <MemberCardsListBigScreens
                    membersData={filteredData}
                    optionType={selectedOption.optionType}
                />
            </div>
        </Section>
    );
};
