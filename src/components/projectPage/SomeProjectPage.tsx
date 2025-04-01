import { useLocale } from "next-intl";

import { membersData } from "@/src/mockedData/membersData";
import { PortfolioDataItemType } from "@/src/mockedData/portfolioData";
import { LocaleType } from "@/types/LocaleType";

import { UnderConstruction } from "../underConstruction/UnderConstruction";
import { WriteUsSection } from "../writeUsSection/WriteUsSection";
import { HeroSection } from "./HeroSection/HeroSection";
import { MoreCasesSection } from "./MoreCasesSection/MoreCasesSection";
import { ProjectHeader } from "./ProjectHeader";
import { ScrollSection } from "./ScrollSection/ScrollSection";
import { StackSectionProject } from "./StackSection/StackSectionProject";
import { TeamSectionProject } from "./TeamSection/TeamSectionProject";

export const SomeProjectPage = ({
    currentProject,
}: {
    currentProject: PortfolioDataItemType;
}) => {
    const locale = useLocale();
    const { name, deadlines, heroTitle, heroText, content } =
        currentProject[locale as LocaleType];
    const currentProjectSlug = currentProject.data.slug;
    const members = membersData.filter(member =>
        member.data.projectId.includes(currentProjectSlug)
    );

    const { technologies, imageForHero, behanceLink } = currentProject.data;

    return (
        <>
            <ProjectHeader title={name} />
            {heroText && heroTitle && imageForHero ? (
                <HeroSection
                    title={heroTitle}
                    text={heroText}
                    heroImage={imageForHero}
                    behanceLink={behanceLink}
                    deadlines={deadlines}
                    name={name}
                />
            ) : (
                <UnderConstruction />
            )}

            {content &&
                content.map((section, index) => {
                    if (section.layout === "scroll") {
                        return <ScrollSection key={index} content={section} />;
                    }

                    return <div key={index}></div>;
                })}

            <TeamSectionProject members={members} />
            {technologies && (
                <StackSectionProject technologies={technologies} />
            )}
            <MoreCasesSection />
            <WriteUsSection text="titleIWant" />
        </>
    );
};
