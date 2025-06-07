"use client";

import { MemberDataItemType } from "@/src/mockedData/membersData";

import { Skeleton } from "./Skeleton";
import { MemberCard } from "../../shared/MemberCard";

export const MemberCardsListTab = ({
    membersData,
}: {
    membersData: MemberDataItemType[] | undefined;
}) => {
    const isLoading = !membersData || membersData.length === 0;

    const visibleMembers = membersData && membersData.slice(0, 9);

    return (
        <ul className="tab:grid tab:grid-cols-3 w-full hidden tab:border-0 pc:hidden">
            {isLoading || !visibleMembers ? (
                <ul className="hidden tab:grid pc:hidden flex-[0_0_100%] w-full border-0 tab:grid-cols-3 ">
                    <Skeleton number={9} />
                </ul>
            ) : (
                visibleMembers.map(member => (
                    <MemberCard key={member.data.id} data={member} />
                ))
            )}
        </ul>
    );
};
