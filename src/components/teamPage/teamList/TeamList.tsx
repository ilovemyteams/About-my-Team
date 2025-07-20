import React from "react";

import { membersData } from "@/src/mockedData/membersData";

import { PageSection } from "../../shared/PageSection";
import { TeamCard } from "./TeamCard";

export const TeamList = () => {
    // Todo:Pagination
    const visibleList = membersData.slice(0, 18);
    return (
        <PageSection className="pb-[80px] tab:pb-[100px] desk:pb-[120px]">
            <ul className="grid grid-cols-1 tab:grid-cols-2 pc:grid-cols-3 desk:grid-cols-4 gap-y-4 tab:gap-y-5 tab:gap-x-[60px] desk:gap-x-[18px]">
                {visibleList.map(member => (
                    <li key={member.data.id} className="group">
                        <TeamCard member={member} />
                    </li>
                ))}
            </ul>
        </PageSection>
    );
};
