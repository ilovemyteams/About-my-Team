"use client";
import { useTranslations } from "next-intl";
import { Section } from "../shared/Section";
import Image from "next/image";
import { IconUp } from "../shared/Icons/IconUp";

export const PresentationSection = () => {
    const getTranslation = useTranslations("AboutPage");

    return (
        <Section id="presentation" className="tab:pt-5 tab:mb-[100px] pc:pt-0">
            <h2 className="font-caviar text-3xl mb-6 text-center tab:hidden">
                {getTranslation("learnMoreAboutUsTitle")}
                <span className="text-purple-100">
                    {getTranslation("learnMoreAboutUsTitleAccent")}
                </span>
            </h2>
            <div className="hidden relative bg-PresentationGradient mb-[80px] tab:mb-[100px] pc:mb-[160px]">
                <Image
                    src="https://drive.google.com/uc?export=view&id=1FCThX8Lx0BifZTlUsTFTHEbOWyXcN0gb"
                    alt={getTranslation("psesentationAlt")}
                    width={1200}
                    height={627}
                    className=" relative -z-[1]"
                />
                <p className="hidden tab:block tab:absolute top-[109px] pc:top-[207px] text-4xl pc:text-6xl font-caviar left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    {getTranslation("learnMoreAboutUs")}
                </p>
                <button
                    aria-label="play button"
                    className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 tab:translate-y-0 pc:top-[262px]
                w-[64px] h-[64px] p-3 rounded-full after:content-[''] after:absolute after:top-0 after:left-0 
                after:z-[-10] after:w-[64px] after:h-[64px] after:rounded-full after:bg-purple-100 
                after:bg-opacity-40 after:blur-[2px] outline-none rotate-90 dark:pc:hover:text-red pc:hover:text-redLight
                    dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300 dark:active:text-red active:text-redLight"
                    onClick={() => alert("You are watching a presentation")}
                >
                    <IconUp />
                </button>
            </div>
            <p className="font-caviar text-xlb pc:text-[32px] pc:leading-[42px] tab:w-[534px] pc:w-[892px] mx-auto">
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
