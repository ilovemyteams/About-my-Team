import { Modal } from "@/src/components/Modal/Modal";
import { MemberCardModalBody } from "@/src/components/ourTeamSection/MemberCardModalBody";
import { membersData } from "@/src/components/shared/mockedData/membersData";
import Image from "next/image";

const MemberPage = ({ params: { slug } }: { params: { slug: number } }) => {
    console.log(slug);
    return (
        <Modal>
            <div className="w-[320px] h-[679px] overflow-hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100]">
                <Image
                    src="/images/bgModalMember/imageModalMemberCardMob.png"
                    alt="BG for modal mobile"
                    fill
                    className="object-cover absolute inset-0 w-[320px] h-[679px] "
                />
                <MemberCardModalBody data={membersData[slug]} />
            </div>
        </Modal>
    );
};

export default MemberPage;
