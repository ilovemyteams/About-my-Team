import { notFound } from "next/navigation";
import React from "react";

import { MemberCardModalBody } from "@/src/components/ourTeamSection/Modal/MemberCardModalBody";
import { MemberCardModalBodyTab } from "@/src/components/ourTeamSection/Modal/MemberCardModalBodyTab";
import { Modal } from "@/src/components/ourTeamSection/Modal/Modal";
import { membersData } from "@/src/mockedData/membersData";
import { LocaleType } from "@/types/LocaleType";
import { getTranslations } from "next-intl/server";

interface MemberPageProps {
    params: {
        id: string;
    };
}

export async function generateMetadata({
    params: { locale, id },
}: {
    params: { locale: string; id: string };
}) {
    const member = membersData.find(member => member.data.id === id);
    const memberName = member ? member[locale as LocaleType]?.name : "Name";
    const memberAbout = member ? member[locale as LocaleType]?.about : "";
    const getTranslation = await getTranslations({
        locale,
        namespace: "MemberCardModal",
    });

    return {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        alternates: {
            canonical: `/member/${id}`,
            languages: {
                en: `/en/member/${id}`,
                pl: `/pl/member/${id}`,
                ua: `/member/${id}`,
            },
        },
        title: `${memberName}`,
        description: `${member?.data.position}`,
        openGraph: {
            description: `${member?.data.position} ${getTranslation("about")}: ${memberAbout}`,
            title: `${memberName}`,
        },
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
