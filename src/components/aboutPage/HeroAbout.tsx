"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";

import { localeInURL } from "@/src/utils/localeInURL";

import { GoBackButton } from "../shared/GoBackButton";
import LocaleSwitcher from "../shared/LocaleSwitcher";
import { Section } from "../shared/Section";
import { ThemeSwitcher } from "../shared/ThemeSwitcher";
import { PageContentList } from "./PageContentList";

export const HeroAbout = () => {
    const { ref, inView } = useInView({
        threshold: 0.75,
    });
    const getTranslation = useTranslations("AboutPage");
    const getTranslationBreadcrumbs = useTranslations("Breadcrumbs");
    const locale = useLocale();
    return (
        <section className="container max-w-[540px] tab:max-w-full desk:max-w-[1456px] scroll-mt-[90px] pc:scroll-mt-[30px] pt-8 tab:pt-12 pc:pt-8 pb-[111px] tab:pb-[100px] pc:pb-12">
            <div className="hidden pc:mb-10 pc:flex gap-[204px] justify-end relative z-10">
                <LocaleSwitcher />
                <ThemeSwitcher id="HeroSectionThemeSwitcher" />
            </div>
            <div className="flex items-center justify-between mb-4 pc:mb-12 desk:mb-[52px]">
                <Breadcrumbs
                    separator="/"
                    itemClasses={{
                        separator: "px-1",
                        item: "dark:text-purple-50 text-greyLight text-xs pc:text-sm desk:text-base dark:pc:hover:text-red pc:hover:text-redLight dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300 dark:active:text-red active:text-redLight",
                    }}
                >
                    <BreadcrumbItem href={`/${localeInURL(locale)}`}>
                        {getTranslationBreadcrumbs("breadcrumbItemHome")}
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <p className="dark:text-red text-redLight">
                            {getTranslationBreadcrumbs("breadcrumbItemAbout")}
                        </p>
                    </BreadcrumbItem>
                </Breadcrumbs>
                <div className="flex justify-end">
                    <GoBackButton />
                </div>
            </div>
            <div className="tab:flex tab:justify-between tab:items-center tab:mb-9 pc:mb-[64px] desk:mb-12">
                <h1 className="text-purple-200 dark:text-grey font-caviar text-3xl mb-6 tab:mb-0 tab:text-4xl pc:text-6xl desk:text-7xl">
                    {getTranslation("title")}
                    <span className="text-purple-100">
                        {getTranslation("titleAccent")}
                    </span>
                </h1>
                <PageContentList />
            </div>
            <div className=" font-caviar text-lg tab:text-xlb pc:text-[32px] pc:leading-9">
                <p className="mb-[34px] tab:w-[360px] tab:mb-[81px] pc:w-[451px] pc:mb-[35px]">
                    <span className="text-purple-100">
                        {getTranslation("missionAccent")}
                    </span>
                    {getTranslation("missionDescription")}
                </p>
                <div className="tab:flex justify-between">
                    <div
                        ref={ref}
                        className="hidden tab:block tab:relative mt-[-48px] pc:mt-[-43px] tab:ml-7 pc:ml-[58px] group"
                    >
                        <Image
                            src="/images/triangle.svg"
                            width="0"
                            height="0"
                            alt="animated image triangle"
                            className={`hidden absolute tab:block min-w-[200px] tab:w-[26vw] pc:w-[30vw] pc:min-w-[385px] pc:max-w-[500px] h-auto ${inView && "animate-triangleRotation"}`}
                        />
                        <Image
                            src="/images/trapeze.svg"
                            width="0"
                            height="0"
                            alt="animated image trapeze"
                            className={`hidden tab:block min-w-[200px] tab:w-[26vw] pc:w-[30vw] pc:min-w-[385px] pc:max-w-[500px] tab:ml-7 pc:ml-[51px] h-auto ${inView && "animate-trapezeRotation"}`}
                        />
                    </div>
                    <div className="tab:w-[48%]">
                        <p className="tab:w-[350px] tab:mr-0 pc:w-[536px]">
                            <span className="text-purple-100">
                                {getTranslation("goalAccent")}
                            </span>
                            {getTranslation("goalDescription")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
