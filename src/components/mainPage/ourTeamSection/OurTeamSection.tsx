import { MAIN_MEMBERS } from "@/src/constants/renderOnMain";
import { MemberDataItemType, membersData } from "@/src/mockedData/membersData";

import { Section } from "../../shared/Section";
import { MemberCardsList } from "./MemberCardsList";
import { MemberCardsListPC } from "./MemberCardsListPC";
import { MemberCardsListTab } from "./MemberCardsListTab";
import { Title } from "./Title";

export const OurTeamSection = () => {
    const defaultMembersData = membersData.filter(member => {
        return member.data.projectId.includes("ilovemyteam-online");
    });
    const membersForMainFromTab = MAIN_MEMBERS.map(id =>
        membersData.find(member => member.data.id === id)
    ).filter((member): member is MemberDataItemType => Boolean(member));

    return (
        <Section id="team" className="relative">
            <Title />
            <div className="relative flex flex-col gap-3 tab:flex-row tab:justify-between">
                <MemberCardsList membersData={defaultMembersData} />
                <MemberCardsListTab membersData={membersForMainFromTab} />
                <MemberCardsListPC membersData={membersForMainFromTab} />
            </div>
        </Section>
    );
};
