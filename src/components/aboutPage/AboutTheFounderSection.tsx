import { useTranslations } from "next-intl";
import { Section } from "../shared/Section";
import Image from "next/image";
import { IconHeartWeb } from "../shared/Icons/IconHeartWeb";

export const AboutTheFounderSection = () => {
    const getTranslation = useTranslations("AboutPage");

    return (
        <Section id="founder">
            <h2 className="font-caviar text-3xl mb-6">
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
                className="mb-6"
            />
            <div className="text-sm mb-6">
                <p className="mb-6">{getTranslation("aboutOwnerP1")}</p>
                <p className="mb-6">{getTranslation("aboutOwnerP2")}</p>
                <p className="mb-6">{getTranslation("aboutOwnerP3")}</p>
                <p className="mb-6">{getTranslation("aboutOwnerP4")}</p>
                <p>{getTranslation("aboutOwnerP5")}</p>
            </div>
            <IconHeartWeb className="dark:text-purple-stroke text-purple-strokeLight ml-auto mr-0" />
        </Section>
    );
};
