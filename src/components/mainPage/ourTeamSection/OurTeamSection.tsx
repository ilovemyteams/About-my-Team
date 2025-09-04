"use client";
import { useTranslations } from "next-intl";

import { MAIN_MEMBERS } from "@/src/constants/renderOnMain";
import { useRouter } from "@/src/i18n/routing";
import { MemberDataItemType, membersData } from "@/src/mockedData/membersData";

import { Button } from "../../shared/Button";
import { Section } from "../../shared/Section";
import { MemberCardsList } from "./MemberCardsList";
import { MemberCardsListPC } from "./MemberCardsListPC";
import { MemberCardsListTab } from "./MemberCardsListTab";
import { Title } from "./Title";

export const OurTeamSection = () => {
    const getTranslation = useTranslations("Buttons");
    const router = useRouter();
    const defaultMembersData = membersData.filter(member => {
        return member.data.projectId.includes("ilovemyteam-online");
    });
    const membersForMainFromTab = MAIN_MEMBERS.map(id =>
        membersData.find(member => member.data.id === id)
    ).filter((member): member is MemberDataItemType => Boolean(member));

    const handleButtonClick = () => {
        router.push(`/member`);
    };

    return (
        <Section id="team" className="relative">
            <Title />
            <div className="relative">
                <div className="relative flex flex-col gap-3 tab:flex-row tab:justify-between">
                    <MemberCardsList membersData={defaultMembersData} />
                    <MemberCardsListTab membersData={membersForMainFromTab} />
                    <MemberCardsListPC membersData={membersForMainFromTab} />
                </div>
                <div className="flex justify-center mt-[32px] tab:mt-[36px] pc:absolute right-0 bottom-0">
                    <Button color="grey" onClick={handleButtonClick}>
                        {getTranslation("allMembers")}
                    </Button>
                </div>
            </div>
        </Section>
    );
};
