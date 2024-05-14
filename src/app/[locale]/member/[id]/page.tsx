import React from "react";
import { useTheme } from "next-themes";
import { notFound } from "next/navigation";
import { MemberCardModalBody } from "@/src/components/ourTeamSection/Modal/MemberCardModalBody";
import { Modal } from "@/src/components/ourTeamSection/Modal/Modal";
import { membersData } from "@/src/mockedData/membersData";
import { MemberCardModalBodyTab } from "@/src/components/ourTeamSection/Modal/MemberCardModalBodyTab";

interface MemberPageProps {
    params: {
        id: string;
    };
}

const MemberPage: React.FC<MemberPageProps> = ({ params }) => {
    const displayedMember = membersData.find(
        member => member.data.id === params.id
    );
    if (!displayedMember) {
        notFound();
    }
    const { theme } = useTheme();
    const myTheme = theme === "dark" ? "dark" : "light";

    return (
        <Modal>
            <MemberCardModalBody data={displayedMember} theme={myTheme} />
            <MemberCardModalBodyTab data={displayedMember} />
        </Modal>
    );
};

export default MemberPage;
