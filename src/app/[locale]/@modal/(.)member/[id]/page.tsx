import { notFound } from "next/navigation";
import React from "react";

import { MemberCardModalBody } from "@/src/components/shared/MemberModal/MemberCardModalBody";
import { MemberCardModalBodyTab } from "@/src/components/shared/MemberModal/MemberCardModalBodyTab";
import { Modal } from "@/src/components/shared/MemberModal/Modal";
import { membersData } from "@/src/mockedData/membersData";

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
