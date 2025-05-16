"use client";
import { SCREEN_NAMES } from "@/src/constants/screenNames";
import { useScreenSize } from "@/src/hooks/useScreenSize";
import { MemberDataItemType } from "@/src/mockedData/membersData";

import { MemberCard } from "../../shared/MemberCard";
import { Skeleton } from "./Skeleton";

export const MemberCardsListTab = ({
    membersData,
}: {
    membersData: MemberDataItemType[] | undefined;
}) => {
    const screenSizeName = useScreenSize();
    const { tabletName } = SCREEN_NAMES;

    const isLoading = !membersData || membersData.length === 0;

    const visibleMembers =
        !isLoading && screenSizeName === tabletName
            ? membersData.slice(0, 9)
            : membersData;

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
