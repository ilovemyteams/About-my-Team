import { useTranslations } from "next-intl";
import { Section } from "../shared/Section";
import Image from "next/image";
import { JoinUsButton } from "../shared/JoinUsButton";

export const TeamSection = () => {
    const getTranslation = useTranslations("AboutPage");

    return (
        <Section id="aboutteam" className="tab:pt-5">
            <h2 className="font-caviar text-3xl mb-6 w-[190px] tab:text-4xl tab:mb-8 tab:w-auto">
                {getTranslation("sectionTeamTitle")}
                <span className="text-purple-100">
                    {getTranslation("sectionTeamTitleAccent")}
                </span>
            </h2>
            <Image
                src="https://drive.google.com/uc?export=view&id=1HHP778It3VeUawC0iExt6mLa8293zqff "
                alt={getTranslation("sectionTeamAlt")}
                width={1441}
                height={831}
                className="mb-6 tab:mb-8"
            />
            <div className="tab:flex tab:flex-col  ">
                <p className="text-base tab:w-[534px] tab:mx-auto mb-6 Tab:mb-8">
                    {getTranslation("sectionTeamText")}
                </p>
                <div className="mx-auto">
                    <JoinUsButton />
                </div>
            </div>
        </Section>
    );
};
