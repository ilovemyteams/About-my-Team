import Image from "next/image";
import { useTranslations } from "next-intl";

import { JoinUsButton } from "../shared/JoinUsButton";
import { Section } from "../shared/Section";

const TEAM_TOGETHER_PHOTO =
    "https://drive.google.com/uc?export=view&id=1n5hpC_COy1tUvAS8AyTahI_n1YuNA5fp";

export const TeamSection = () => {
    const getTranslation = useTranslations("AboutPage");

    return (
        <Section id="aboutteam" className="tab:pt-5 pc:pt-0">
            <h2 className="text-purple-200 dark:text-grey font-caviar text-3xl mb-6 w-[190px] tab:text-4xl tab:mb-8 tab:w-auto pc:text-6xl">
                {getTranslation("sectionTeamTitle")}
                <span className="text-purple-100">
                    {getTranslation("sectionTeamTitleAccent")}
                </span>
            </h2>
            <div className="pc:flex pc:gap-[102px]">
                <Image
                    src={TEAM_TOGETHER_PHOTO}
                    alt={getTranslation("sectionTeamAlt")}
                    width={1442}
                    height={831}
                    className="mb-6 tab:mb-8 pc:w-[58.3%] pc:mb-0"
                />
                <div className="flex flex-col justify-center pc:justify-between ">
                    <p className="text-base pc:text-xl tab:w-[534px] pc:w-auto tab:mx-auto mb-6 Tab:mb-8">
                        {getTranslation("sectionTeamText")}
                    </p>
                    <div className="mx-auto  pc:mx-0">
                        <JoinUsButton />
                    </div>
                </div>
            </div>
        </Section>
    );
};
