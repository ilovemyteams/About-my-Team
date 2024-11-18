"use client";

import { useEffect, useMemo, useState } from "react";

import {
    AllMembersQueryResult,
    CategoryNamesQueryResult,
    HomeTeamQueryResult,
    ProjectQueryResult,
} from "@/types/sanity.types";

import { Section } from "../shared/Section";
import { SharePopover } from "../shared/SharePopover";
import { MemberCardsList } from "./MemberCardsList";
import { MemberCardsListBigScreens } from "./MemberCardsListBigScreens";
import { MenuTeamSection } from "./MenuTeamSection";
import { Title } from "./Title";

//TODO: INITIAL_OPTIONS will be changed on fetch from portfolio data
const INITIAL_OPTIONS = {
    optionName: "i love my team",
    optionValue: "1",
    optionType: "team",
};

export const OurTeamSection = ({
    data,
    members,
    projects,
    categoryNames,
}: {
    data: HomeTeamQueryResult;
    members: AllMembersQueryResult;
    projects: ProjectQueryResult;
    categoryNames: CategoryNamesQueryResult;
}) => {
    const teamHome = data?.teamHome;
    const membersList = members;
    const allProjects = projects;

    const anchorId = teamHome?.anchorId || "";
    const displayedProjectsList = useMemo(
        () => teamHome?.projectsList || [],
        [teamHome]
    );
    const subtitle = teamHome?.subtitle || "";
    const title = teamHome?.title || [];

    console.log("membersList", membersList);
    console.log(allProjects);

    const [selectedOption, setSelectedOption] = useState(INITIAL_OPTIONS);
    // const defaultMembersData = membersList.filter(member => {
    //     return member.category;
    // });
    const [filteredData, setFilteredData] = useState(membersList);

    useEffect(() => {
        if (selectedOption.optionType === "person") {
            const filtered = membersList.filter(
                member => member.category === selectedOption.optionValue
            );

            setFilteredData(filtered);
        } else {
            const project = displayedProjectsList.find(
                project => project._id === selectedOption.optionValue
            );
            if (project) {
                const filteredMembers = membersList.filter(member => {
                    if (member.ILMTProjects) {
                        return member.ILMTProjects.includes(
                            selectedOption.optionValue
                        );
                    }
                });

                setFilteredData(filteredMembers);
            } else {
                setFilteredData([]);
            }
        }
    }, [displayedProjectsList, membersList, selectedOption]);

    return (
        <Section id={anchorId} className="relative">
            <Title title={title} subtitle={subtitle} />
            <div className="relative flex flex-col gap-3 tab:flex-row tab:justify-between">
                <MenuTeamSection
                    displayedProjectsList={displayedProjectsList}
                    categoryNames={categoryNames}
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
            <SharePopover
                className="absolute -top-3 right-4 tab:static tab:items-end tab:ml-auto tab:mt-4 pc:mt-5"
                id="team"
                trigerShowShareText={false}
            />
        </Section>
    );
};
