import { useTranslations } from "next-intl";
import { Section } from "../shared/Section";
import Image from "next/image";
import { IconHeartWeb } from "../shared/Icons/IconHeartWeb";

export const AboutTheFounderSection = () => {
    const getTranslation = useTranslations("AboutPage");

    return (
        <Section>
            <h2>
                {getTranslation("aboutOwnerTitle")}
                <span className="text-purple-100">
                    {getTranslation("aboutOwnerTitleAccent")}
                </span>
            </h2>
            <Image
                src="https://drive.google.com/uc?export=view&id=1j2sHd4yuBnbgXsl-lZsZypeu-mKlruVI"
                alt={getTranslation("aboutOwnerPhotoAlt")}
                width={449}
                height={503}
            />
            <p>{getTranslation("aboutOwnerP1")}</p>
            <p>{getTranslation("aboutOwnerP2")}</p>
            <p>{getTranslation("aboutOwnerP3")}</p>
            <p>{getTranslation("aboutOwnerP4")}</p>
            <p>{getTranslation("aboutOwnerP5")}</p>
            <IconHeartWeb className="dark:text-purple-stroke text-purple-strokeLight ml-auto mr-0" />
        </Section>
    );
};
