import { useTranslations } from "next-intl";
import { Section } from "../shared/Section";
import Image from "next/image";

export const PresentationSection = () => {
    const getTranslation = useTranslations("AboutPage");

    return (
        <Section>
            <h2>
                {getTranslation("learnMoreAboutUsTitle")}
                <span className="text-purple-100">
                    {getTranslation("learnMoreAboutUsTitleAccent")}
                </span>
            </h2>
            <div className="bg-PresentationGradient">
                <Image
                    src="https://drive.google.com/uc?export=view&id=1FCThX8Lx0BifZTlUsTFTHEbOWyXcN0gb"
                    alt={getTranslation("psesentationAlt")}
                    width={1200}
                    height={627}
                    className=" relative -z-[1]"
                />
            </div>
            <p>
                <span className="text-purple-100">
                    {getTranslation("finallyFirstAccent")}
                </span>
                {getTranslation("finallySecond")}
                <span className="text-purple-100">
                    {getTranslation("finallyThirdAccent")}
                </span>
                {getTranslation("finallyFourth")}
                <span className="text-purple-100">
                    {getTranslation("finallyFifthAccent")}
                </span>
                {getTranslation("finallySixth")}
                <span className="text-purple-100">
                    {getTranslation("finallySeventhAccent")}
                </span>
                {getTranslation("finallyEighth")}
            </p>
        </Section>
    );
};
