import React from "react";
import Image from "next/image";
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
            <Image
                src="/images/bgModalMember/bgImageMemberModalTab.png"
                alt="BG for modal mobile"
                fill
                className="hidden tab:block object-cover absolute inset-0 -z-[5]"
            />
            <MemberCardModalBody data={displayedMember} />
            <MemberCardModalBodyTab data={displayedMember} />
        </Modal>
    );
};

export default MemberPage;
