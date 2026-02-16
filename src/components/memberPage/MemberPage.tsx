import { getLocale } from "next-intl/server";

import { Section } from "@/src/components/shared/Section";
import { MemberDataItemType } from "@/src/mockedData/membersData";
import { LocaleType } from "@/types/LocaleType";

import { About } from "./about/About";
import { Expertise } from "./expertise/Expertise";
import { Avatar } from "./parts/Avatar";
import { CommercialExp } from "./parts/CommercialExp";
import { Education } from "./parts/Education";
import { Languages } from "./parts/Languages";
import { MemberSocialLinks } from "./parts/MemberSocialLinks";
import { ProfessionalExp } from "./parts/ProfessionalExp";
import { ProjectCardList } from "./parts/ProjectCardList";
import { Projects } from "./parts/Projects";
import { Statistics } from "./parts/Statistics";
import { Teammates } from "./teammates/Teammates";

interface MemberPageProps {
    member: MemberDataItemType;
}

export const MemberPage = async ({ member }: MemberPageProps) => {
    const locale = await getLocale();
    const langData = member[locale as LocaleType];
    const {
        name,
        about,
        languages,
        education,
        certificates,
        services,
        professionalExperience,
    } = langData;

    const {
        id,
        imageURL,
        position,
        socialLinks,
        pricePerHour,
        careerStart,
        commercialExperience,
        projectsExperience,
        projects,
        tools,
    } = member.data;

    return (
        <Section className="pb-[80px] tab:pb-[100px] pc:pb-[100px] desk:pb-[120px]">
            <div className="grid grid-cols-1 tab:grid-cols-[360px_1fr] pc:grid-cols-[328px_1fr] desk:grid-cols-[380px_1fr]">
                <div
                    className={`
                        flex flex-col gap-3 tab:border border-purple-strokeLight dark:border-purple-stroke tab:p-3 pc:p-5 desk:p-7 
                        [&>section]:border-b [&>section]:border-purple-strokeLight dark:[&>section]:border-purple-stroke`}
                >
                    <section>
                        <Avatar
                            imageURL={imageURL}
                            position={position}
                            name={name}
                        />
                        <MemberSocialLinks socialLinks={socialLinks} />
                        <Statistics
                            pricePerHour={pricePerHour}
                            careerStart={careerStart}
                            projectsCount={projectsExperience.length}
                        />
                    </section>
                    {commercialExperience && (
                        <CommercialExp
                            commercialExperience={commercialExperience}
                            projects={projects}
                        />
                    )}
                    <Expertise tools={tools} />
                    <Projects projectsExperience={projectsExperience} />
                    {languages && <Languages languages={languages} />}
                    {education && <Education education={education} />}
                    {certificates && (
                        <Education education={certificates} certificates />
                    )}
                </div>
                <div className="flex flex-col gap-4 min-w-0 tab:gap-5 pc:gap-8 desk:gap-10 tab:border-t tab:border-r tab:border-b border-purple-strokeLight dark:border-purple-stroke p-4">
                    <About text={about} services={services} />
                    <ProjectCardList
                        id={id}
                        projects={projects}
                        tools={tools}
                        position={position}
                    />
                    {professionalExperience && (
                        <ProfessionalExp
                            professionalExperience={professionalExperience}
                        />
                    )}
                    <Teammates projects={projects} id={id} />
                </div>
            </div>
        </Section>
    );
};
