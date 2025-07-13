import { useLocale } from "next-intl";

import { feedbackData } from "@/src/mockedData/feedbackData";
import { membersData } from "@/src/mockedData/membersData";
import { PortfolioDataItemType } from "@/src/mockedData/portfolioData";
import { LocaleType } from "@/types/LocaleType";

import { WriteUsSection } from "../CTAs/writeUsSection/WriteUsSection";
import { TitleVideoDotslistItem } from "../shared/TitleVideoList/TitleVideoDotslistItem";
import { UnderConstruction } from "../underConstruction/UnderConstruction";
import { AdaptiveSection } from "./AdaptiveSection/AdaptiveSection";
import { DecisionSection } from "./DecisionSection/DecisionSection";
import { FeedbackProject } from "./FeedbackSection/FeedbackProject";
import { HeroSection } from "./HeroSection/HeroSection";
import { LayoutShiftAnimation } from "./LayoutShiftAnimation";
import { MoreCasesSection } from "./MoreCasesSection/MoreCasesSection";
import { ProjectHeader } from "./ProjectHeader";
import { StackSectionProject } from "./StackSection/StackSectionProject";
import { TasksSection } from "./TasksSection/TasksSection";
import { TeamSectionProject } from "./TeamSection/TeamSectionProject";

export const SomeProjectPage = ({
    currentProject,
}: {
    currentProject: PortfolioDataItemType;
}) => {
    const locale = useLocale();
    const { name, heroText, heroTitle, deadlines, tasks } =
        currentProject[locale as LocaleType];
    const currentProjectSlug = currentProject.data.slug;
    const members = membersData.filter(member =>
        member.data.projectId.includes(currentProjectSlug)
    );

    const { technologies, mediaForHero, behanceLink, adaptive } =
        currentProject.data;

    const feedbackCurrent = feedbackData.filter(
        feedback => feedback.data.slug === currentProjectSlug
    );
    const decision = currentProject[locale as LocaleType].decision;
    const titleVideoList = currentProject[locale as LocaleType].titleListVideo;

    return (
        <>
            <ProjectHeader title={name} />

            {heroText && heroTitle && mediaForHero ? (
                <HeroSection
                    title={heroTitle}
                    text={heroText}
                    heroImage={mediaForHero}
                    behanceLink={behanceLink}
                    deadlines={deadlines}
                    name={name}
                />
            ) : (
                <UnderConstruction />
            )}

            {tasks && <TasksSection content={tasks} />}

            {decision && <DecisionSection decisions={decision} />}
            <ul>
                {titleVideoList &&
                    titleVideoList.length !== 0 &&
                    titleVideoList.map((item, index) => (
                        <TitleVideoDotslistItem
                            key={index}
                            data={item}
                            index={index}
                        />
                    ))}
            </ul>

            {adaptive && <AdaptiveSection screens={adaptive} />}
            <TeamSectionProject members={members} />
            {technologies && (
                <StackSectionProject technologies={technologies} />
            )}
            <LayoutShiftAnimation>
                {feedbackCurrent.length !== 0 && (
                    <FeedbackProject feedback={feedbackCurrent} />
                )}
                <MoreCasesSection activeSlug={currentProject.data.slug} />
                <WriteUsSection text="titleIWant" />
            </LayoutShiftAnimation>
        </>
    );
};
