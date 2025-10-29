import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";

import { MemberCard } from "@/src/components/memberCard/MemberCard";
// import { MemberCard } from "@/src/components/shared/MemberCard";
import { PageSection } from "@/src/components/shared/PageSection";
import { PageTopSection } from "@/src/components/shared/PageTopSection";
import { membersData } from "@/src/mockedData/membersData";
import { LocaleType } from "@/types/LocaleType";

type MemberPageProps = {
    id: string;
};

export async function generateMetadata({
    params,
}: {
    params: Promise<MemberPageProps>;
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

const MemberPage = async ({ params }: { params: Promise<MemberPageProps> }) => {
    const { id } = await params;
    const breadcrumbs = await getTranslations("Breadcrumbs");
    const breadcrumbsName = [
        { title: breadcrumbs("breadcrumbItemTeam"), url: "member" },
        { title: breadcrumbs("breadcrumbItemMember"), url: "" },
    ];

    const member = membersData.find(member => member.data.id === id);

    if (!member) {
        notFound();
    }

    return (
        <PageSection className="pt-4 tab:pt-[44px] pc:pt-8">
            <PageTopSection breadcrumbsList={breadcrumbsName} />
            <MemberCard data={member} />
        </PageSection>
    );
};

export default MemberPage;
