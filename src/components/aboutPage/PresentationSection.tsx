"use client";

import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { selectedLocalePresentation } from "@/src/utils/selectedLocalePresentation";

import { Section } from "../shared/Section";

export const PresentationSection = () => {
    const getTranslation = useTranslations("AboutPage");
    const locale = useLocale();
    const selectedPresentation = selectedLocalePresentation(locale);

    return (
        <Section id="presentation" className="relative">
            <div
                className="  mx-auto pc:py-[101px] pc:w-[890px] pc:h-[608px] mb-[80px] tab:mb-[100px] pc:mb-[160px] desk:mb-[120px] pc:border dark:border-purple-stroke border-purple-strokeLight
            desk:w-[1262px] desk:h-[614px] desk:pt-[100px] desk:pb-[109px]"
            >
                <div className="mx-auto max-w-[720px]">
                    <YouTubeEmbed
                        videoid={selectedPresentation}
                        params="rel=0"
                        style="margin-left:auto; margin-right:auto;"
                    />
                </div>
            </div>

            <Image
                src="/images/pumkin.png"
                alt="Pumkin"
                width={60}
                height={60}
                className="animate-pumkintion absolute top-[15px] pc:top-[115px] tab:left-[28%] z-[-1]"
            />

            <p className="font-caviar text-xlb pc:text-[32px] pc:leading-[42px] tab:w-[534px] pc:w-[890px] desk:w-[1113px] mx-auto">
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
