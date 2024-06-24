"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { membersData, MemberDataItemType } from "../../mockedData/membersData";
import { portfolioData } from "../../mockedData/portfolioData";
import { Section } from "../shared/Section";
import { Title } from "./Title";
import { MenuTeamSection } from "./MenuTeamSection";
import { MemberCardsList } from "./MemberCardsList";
import { MemberCardsListBigScreens } from "./MemberCardsListBigScreens";

type Option = {
    optionName: string;
    optionValue: string;
    optionType: string;
};

const INITIAL_OPTIONS: Option = {
    optionName: "i love my team",
    optionValue: "1",
    optionType: "team",
};

export const OurTeamSection = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const getInitialOptionFromUrl = () => {
        const optionValue =
            searchParams.get("optionValue") || INITIAL_OPTIONS.optionValue;
        const optionType =
            searchParams.get("optionType") || INITIAL_OPTIONS.optionType;
        const optionName =
            searchParams.get("optionName") || INITIAL_OPTIONS.optionName;
        return {
            optionName,
            optionValue,
            optionType,
        };
    };

    const [selectedOption, setSelectedOption] = useState<Option>(
        getInitialOptionFromUrl
    );
    const [filteredData, setFilteredData] = useState<MemberDataItemType[]>([]);

    useEffect(() => {
        const updateUrlWithOption = () => {
            const params = new URLSearchParams();
            params.set("optionName", selectedOption.optionName);
            params.set("optionValue", selectedOption.optionValue);
            params.set("optionType", selectedOption.optionType);
            const query = params.toString();
            const hash = `#team`;
            router.replace(`?${query}${hash}`, { scroll: false });
        };

        updateUrlWithOption();

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
                const filteredMembers = membersData.filter(member =>
                    member.data.projectId.includes(project.data.id)
                );
                setFilteredData(filteredMembers);
            } else {
                setFilteredData([]);
            }
        }
    }, [selectedOption, router]);

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

export default OurTeamSection;
