import { useTranslations } from "next-intl";

import { MemberDataItemType } from "@/src/mockedData/membersData";

import { PageSection } from "../../shared/PageSection";
import { TeamMemberCardLink } from "./TeamMemberCardLink";
import { TeamProjectMobList } from "./TeamProjectMobList";

export const TeamSectionProject = ({
    members,
}: {
    members: MemberDataItemType[];
}) => {
    const getTranslation = useTranslations("SomeProjectPage");
    return (
        <PageSection className="pb-[109px] tab:pb-[100px] desk:pb-[120px]">
            <h2 className="font-caviar text-2xl tab:text-4xl pc:text-5xl desk:text-6xl font-bold mb-6 tab:mb-10 pc:mb-[64px]">
                {getTranslation.rich("teamTitle", {
                    purple: chunk => (
                        <span className="text-purple-100">{chunk}</span>
                    ),
                })}
            </h2>
            <ul className="hidden tab:flex gap-x-4 gap-y-4 tab:gap-x-[54px] pc:gap-x-[90px] tab:gap-y-6 desk:gap-y-8 flex-wrap">
                {members.map(member => (
                    <li
                        key={member.data.id}
                        className="flex gap-3 items-center pc:gap-5 w-[204px] tab:w-[28%] pc:w-[25%] desk:w-[334px]"
                    >
                        <TeamMemberCardLink member={member} />
                    </li>
                ))}
            </ul>
            <div className="tab:hidden">
                <TeamProjectMobList members={members} />
            </div>
        </PageSection>
    );
};
