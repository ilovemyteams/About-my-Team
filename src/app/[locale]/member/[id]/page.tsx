import { getLocale, getTranslations } from "next-intl/server";
import React from "react";

import { MemberHeader } from "@/src/components/memberPage/header/MemberHeader";
import { MemberPage } from "@/src/components/memberPage/MemberPage";
import { membersData } from "@/src/mockedData/membersData";
import { LocaleType } from "@/types/LocaleType";

type MemberProps = {
    id: string;
};

export async function generateMetadata({
    params,
}: {
    params: Promise<MemberProps>;
}) {
    const { id } = await params;
    const locale = await getLocale();
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
        title: memberName,
        description: member?.data.position,
        openGraph: {
            description: `${member?.data.position} ${getTranslation("about")}: ${memberAbout}`,
            title: memberName,
        },
    };
}

const Member = () => {
    return (
        <>
            <MemberHeader />
            <MemberPage />
        </>
    );
};

export default Member;
