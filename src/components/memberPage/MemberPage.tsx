import { useLocale } from "next-intl";

import { Section } from "@/src/components/shared/Section";
import { MemberDataItemType } from "@/src/mockedData/membersData";
import { LocaleType } from "@/types/LocaleType";

import { Avatar } from "./parts/Avatar";
import { MemberSocialLinks } from "./parts/MemberSocialLinks";
import { Statistics } from "./parts/Statistics";

interface MemberPageProps {
    member: MemberDataItemType;
}

export const MemberPage = ({ member }: MemberPageProps) => {
    const locale = useLocale();
    const langData = member[locale as LocaleType];

    const {
        imageURL,
        position,
        socialLinks,
        pricePerHour,
        careerStart,
        projectsExperience,
    } = member.data;

    return (
        <Section className="pb-[80px] tab:pb-[100px] pc:pb-[100px] desk:pb-[120px]">
            <div className="grid grid-cols-1 tab:grid-cols-[360px_1fr] pc:grid-cols-[328px_1fr] desk:grid-cols-[380px_1fr]">
                <div className="tab:border border-purple-strokeLight dark:border-purple-stroke tab:p-3 pc:p-5 desk:p-7">
                    <Avatar
                        imageURL={imageURL}
                        position={position}
                        name={langData.name}
                    />
                    <MemberSocialLinks socialLinks={socialLinks} />
                    <Statistics
                        pricePerHour={pricePerHour}
                        careerStart={careerStart}
                        projectsCount={projectsExperience.length}
                    />
                </div>
                <div className="tab:border-t tab:border-r tab:border-b border-purple-strokeLight dark:border-purple-stroke p-4">
                    Колонка 2
                </div>
            </div>
        </Section>
    );
};
