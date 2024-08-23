"use client";

import { YouTubeEmbed } from "@next/third-parties/google";
import { useTranslations } from "next-intl";

import { Section } from "../shared/Section";
import ImageWithAnimation from "./ImageWithAnimation";

export const PresentationSection = () => {
    const getTranslation = useTranslations("AboutPage");

    return (
        <Section
            id="presentation"
            className="tab:pt-5 tab:mb-[100px] pc:pt-0 desk:mt-5"
        >
            <h2 className="hidden text-purple-200 dark:text-grey font-caviar text-3xl mb-6 text-center tab:hidden">
                {getTranslation("learnMoreAboutUsTitle")}
                <span className="text-purple-100">
                    {getTranslation("learnMoreAboutUsTitleAccent")}
                </span>
            </h2>
            <div className="relative  mx-auto max-w-[720px] mb-[80px] tab:mb-[100px] pc:mb-[160px]">
                <YouTubeEmbed
                    videoid="px98Nw4r484"
                    params="rel=0"
                    style="margin-left:auto; margin-right:auto"
                />

                <ImageWithAnimation />
            </div>
            <p className="font-caviar text-xlb pc:text-[32px] pc:leading-[42px] tab:w-[534px] pc:w-[892px] desk:w-[1113px] mx-auto">
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
