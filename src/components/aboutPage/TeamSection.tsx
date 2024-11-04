import Image from "next/image";
import { useTranslations } from "next-intl";

import { JoinUsButton } from "../shared/JoinUsButton";
import { Section } from "../shared/Section";

//drive.google.com/file/d/1nuy2rXsGKq3Oawrv-ZmXXaFJ5V8juIys/view?usp=drive_link
//drive.google.com/file/d/1QIjv1GEXVo03ox5275BBUEesXVJmD27T/view?usp=drive_link

const TEAM_TOGETHER_PHOTO =
    "https://drive.google.com/uc?export=view&id=1nuy2rXsGKq3Oawrv-ZmXXaFJ5V8juIys";

export const TeamSection = () => {
    const getTranslation = useTranslations("AboutPage");

    return (
        <Section id="aboutteam">
            <h2 className=" tab:hidden text-purple-200 dark:text-grey font-caviar text-3xl mb-6">
                {getTranslation("sectionTeamTitle")} <br />
                <span className="text-purple-100">
                    {getTranslation("sectionTeamTitleAccent")}
                </span>
            </h2>
            <h2 className=" hidden tab:block text-purple-200 dark:text-grey font-caviar tab:text-4xl tab:mb-8 desk:mb-10 tab:w-auto pc:text-6xl desk:text-7xl">
                {getTranslation("sectionTeamTitle")}
                <span className="text-purple-100">
                    {getTranslation("sectionTeamTitleAccent")}
                </span>
            </h2>
            <div className="pc:flex pc:gap-[102px] desk:gap-[100px]">
                <Image
                    src={TEAM_TOGETHER_PHOTO}
                    alt={getTranslation("sectionTeamAlt")}
                    width={1442}
                    height={831}
                    className="mb-6 tab:mb-8 pc:w-[58.3%] desk:w-[55.2%] pc:mb-0"
                />
                <div className="flex flex-col justify-center pc:justify-between desk:w-[494px]">
                    <p className="text-base pc:text-xl desk:text-2xl tab:w-[534px] pc:w-auto tab:mx-auto mb-6 Tab:mb-8">
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
