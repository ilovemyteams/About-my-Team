import { MemberCardModalBody } from "@/src/components/ourTeamSection/MemberCardModalBody";
import { membersData } from "@/src/components/shared/mockedData/membersData";
import Image from "next/image";

const MemberPage = ({ params: { slug } }: { params: { slug: number } }) => {
    console.log(slug);
    return (
        <div className="w-full h-[679px] overflow-hidden relative mt-[80px] pt-4">
            <Image
                src="/images/bgModalMember/imageModalMemberCardMob.png"
                alt="BG for modal mobile"
                fill
                className="object-cover absolute inset-0 w-[320px] h-[679px] z-4"
            />
            <MemberCardModalBody data={membersData[slug]} />
        </div>
    );
};

export default MemberPage;
