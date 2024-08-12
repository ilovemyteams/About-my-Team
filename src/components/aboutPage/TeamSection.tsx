import { useTranslations } from "next-intl";
import { Section } from "../shared/Section";
import Image from "next/image";

export const TeamSection = () => {
    const getTranslation = useTranslations("AboutPage");

    return (
        <Section>
            <h2>
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
            />
            <p>{getTranslation("sectionTeamText")}</p>
        </Section>
    );
};
