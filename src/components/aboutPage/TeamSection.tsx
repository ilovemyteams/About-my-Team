import { useTranslations } from "next-intl";
import Image from "next/image";
import { Section } from "../shared/Section";
import { JoinUsButton } from "../shared/JoinUsButton";

const TEAMTOGETHERPHOTO =
    "https://drive.google.com/uc?export=view&id=1HHP778It3VeUawC0iExt6mLa8293zqff";

export const TeamSection = () => {
    const getTranslation = useTranslations("AboutPage");

    return (
        <Section id="aboutteam" className="tab:pt-5">
            <h2 className="font-caviar text-3xl mb-6 w-[190px] tab:text-4xl tab:mb-8 tab:w-auto pc:text-6xl">
                {getTranslation("sectionTeamTitle")}
                <span className="text-purple-100">
                    {getTranslation("sectionTeamTitleAccent")}
                </span>
            </h2>
            <div className="pc:flex pc:gap-[102px]">
                <Image
                    src={TEAMTOGETHERPHOTO}
                    alt={getTranslation("sectionTeamAlt")}
                    width={1442}
                    height={831}
                    className="mb-6 tab:mb-8 pc:w-[58.3%] pc:mb-0"
                />
                <div className="tab:flex tab:flex-col pc:justify-between ">
                    <p className="text-base pc:text-xl tab:w-[534px] pc:w-auto tab:mx-auto mb-6 Tab:mb-8">
                        {getTranslation("sectionTeamText")}
                    </p>
                    <div className="mx-auto pc:mx-0">
                        <JoinUsButton />
                    </div>
                </div>
            </div>
        </Section>
    );
};
