"use client";

import { Link } from "@/src/i18n/routing";
import { MemberDataItemType } from "@/src/mockedData/membersData";
import { usePreviousURL } from "@/src/utils/PreviousURLContext";

import { TeamMemberCard } from "./TeamMemberCard";

export const TeamMemberCardLink = ({
    member,
}: {
    member: MemberDataItemType;
}) => {
    const { setPreviousURL } = usePreviousURL();
    const backPath = () => {
        setPreviousURL(`back`);
    };

    const id = member.data.id;
    return (
        <Link href={`/member/${id}`} onClick={backPath} className="group">
            <TeamMemberCard member={member} />
        </Link>
    );
};
