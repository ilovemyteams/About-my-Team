import { useLocale } from "next-intl";

import { feedbackData } from "@/src/mockedData/feedbackData";
import { membersData } from "@/src/mockedData/membersData";
import { PortfolioDataItemType } from "@/src/mockedData/portfolioData";
import { LocaleType } from "@/types/LocaleType";

import { WriteUsSection } from "../CTAs/writeUsSection/WriteUsSection";
import { UnderConstruction } from "../underConstruction/UnderConstruction";
import { FeedbackProject } from "./FeedbackSection/FeedbackProject";
import { MoreCasesSection } from "./MoreCasesSection/MoreCasesSection";
import { ProjectHeader } from "./ProjectHeader";
import { StackSectionProject } from "./StackSection/StackSectionProject";
import { TeamSectionProject } from "./TeamSection/TeamSectionProject";

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
    const feedbackCurrent = feedbackData.filter(
        feedback => feedback.data.slug === currentProjectSlug
    );

    return (
        <>
            <ProjectHeader title={name} />
            <UnderConstruction />
            <TeamSectionProject members={members} />
            {technologies && (
                <StackSectionProject technologies={technologies} />
            )}
            {feedbackCurrent && <FeedbackProject feedback={feedbackCurrent} />}
            <MoreCasesSection />
            <WriteUsSection text="titleIWant" />
        </>
    );
};
