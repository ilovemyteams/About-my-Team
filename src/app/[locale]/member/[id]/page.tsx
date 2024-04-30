import React from "react";
import { notFound } from "next/navigation";
import { MemberCardModalBody } from "@/src/components/ourTeamSection/MemberCardModalBody";
import { Modal } from "@/src/components/ourTeamSection/Modal";
import { membersData } from "@/src/mockedData/membersData";
import { MemberCardModalBodyTab } from "@/src/components/ourTeamSection/MemberCardModalBodyTab";

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
    return (
        <Modal>
            <MemberCardModalBody data={displayedMember} />
            <MemberCardModalBodyTab data={displayedMember} />
        </Modal>
    );
};

export default MemberPage;
