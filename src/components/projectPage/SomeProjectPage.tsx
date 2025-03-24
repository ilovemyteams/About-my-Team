import { useLocale } from "next-intl";

import { membersData } from "@/src/mockedData/membersData";
import { PortfolioDataItemType } from "@/src/mockedData/portfolioData";
import { LocaleType } from "@/types/LocaleType";

import { UnderConstruction } from "../underConstruction/UnderConstruction";
import { ProjectHeader } from "./ProjectHeader";
import { TeamSectionProject } from "./TeamSectionPage/TeamSectionProject";

export const SomeProjectPage = ({
    currentProject,
}: {
    currentProject: PortfolioDataItemType;
}) => {
    const locale = useLocale();
    const { name } = currentProject[locale as LocaleType];
    const currentProjectSlug = currentProject.data.slug;
    const members = membersData.filter(member =>
        member.data.projectId.includes(currentProjectSlug)
    );

    return (
        <>
            <ProjectHeader title={name} />
            <UnderConstruction />
            <TeamSectionProject members={members} />
        </>
    );
};
