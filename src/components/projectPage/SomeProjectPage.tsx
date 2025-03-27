import { useLocale } from "next-intl";

import { membersData } from "@/src/mockedData/membersData";
import { PortfolioDataItemType } from "@/src/mockedData/portfolioData";
import { LocaleType } from "@/types/LocaleType";

import { UnderConstruction } from "../underConstruction/UnderConstruction";
import { MoreCasesSection } from "./MoreCasesSection/MoreCasesSection";
import { ProjectHeader } from "./ProjectHeader";
import { StackSectionProject } from "./StackSection/StackSectionProject";
import { TeamSectionProject } from "./TeamSection/TeamSectionProject";
import { WriteUsSection } from "../writeUsSection/WriteUsSection";

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
    const technologies = currentProject.data.technologies;

    return (
        <>
            <ProjectHeader title={name} />
            <UnderConstruction />
            <TeamSectionProject members={members} />
            {technologies && (
                <StackSectionProject technologies={technologies} />
            )}
            <MoreCasesSection />
            <WriteUsSection text="titleIWant" />
        </>
    );
};
