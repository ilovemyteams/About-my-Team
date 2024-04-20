import { Modal } from "@/src/components/Modal/Modal";
import { MemberCardModalBody } from "@/src/components/ourTeamSection/MemberCardModalBody";
import { membersData } from "@/src/mockedData/membersData";
import Image from "next/image";
import React from "react";

interface MemberPageProps {
    params: {
        id: string;
    };
}

const MemberPage: React.FC<MemberPageProps> = ({ params }) => {
    console.log(params.id);
    const displayedMember = membersData.find(
        member => member.data.id === params.id
    );
    if (!displayedMember) {
        return <p>Member not found</p>;
    }
    console.log(displayedMember);
    return (
        <Modal>
            <Image
                src="/images/bgModalMember/imageModalMemberCardMob.png"
                alt="BG for modal mobile"
                fill
                className="object-cover absolute inset-0 w-[320px] h-[679px] -z-[5]"
            />
            <MemberCardModalBody data={displayedMember} />
        </Modal>
    );
};

export default MemberPage;
