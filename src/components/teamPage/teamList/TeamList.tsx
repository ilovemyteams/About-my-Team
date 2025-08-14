import React from "react";

import { membersData } from "@/src/mockedData/membersData";

import { PageSection } from "../../shared/PageSection";
import { TeamCard } from "./TeamCard";

export const TeamList = () => {
    // Todo:Pagination
    const visibleList = membersData.slice(0, 18);
    return (
        <PageSection className="pb-[80px] tab:pb-[100px] desk:pb-[120px]">
            <ul className="grid grid-cols-1 tab:grid-cols-[repeat(auto-fit,minmax(320px,_1fr))] gap-y-4 tab:gap-5 desk:gap-x-3">
                {visibleList.map(member => (
                    <li key={member.data.id}>
                        <TeamCard member={member} />
                    </li>
                ))}
            </ul>
        </PageSection>
    );
};
