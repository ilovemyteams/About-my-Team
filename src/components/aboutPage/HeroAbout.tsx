"use client";
import { useLocale, useTranslations } from "next-intl";
import { Section } from "../shared/Section";
import { LinkGoBack } from "../shared/LinkGoBack";
import { localeInURL } from "@/src/utils/localeInURL";
import { PageContentList } from "./PageContentList";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

export const HeroAbout = () => {
    const getTranslation = useTranslations("AboutPage");
    const getTranslationBreadcrumbs = useTranslations("Breadcrumbs");
    const locale = useLocale();
    return (
        <Section className="pt-8 tab:pt-12 pc:pt-[100px]">
            <div className="flex items-center justify-between mb-4 pc:mb-[102px]">
                <Breadcrumbs
                    separator="/"
                    itemClasses={{
                        separator: "px-1",
                        item: "dark:text-purple-50 text-greyLight text-xs dark:pc:hover:text-red pc:hover:text-redLight dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300 dark:active:text-red active:text-redLight",
                    }}
                >
                    <BreadcrumbItem href="/">
                        {getTranslationBreadcrumbs("breadcrumbItemHome")}
                    </BreadcrumbItem>
                    <BreadcrumbItem
                        href="/about"
                        className="underline dark:text-purple-50 text-greyLight dark:pc:hover:text-red pc:hover:text-redLight
                    dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300 dark:active:text-red active:text-redLight"
                    >
                        {getTranslationBreadcrumbs("breadcrumbItemAbout")}
                    </BreadcrumbItem>
                </Breadcrumbs>
                <div className="flex justify-end">
                    <LinkGoBack linkBack={`/${localeInURL(locale)}#mission`} />
                </div>
            </div>
            <div className="tab:flex tab:justify-between tab:items-center tab:mb-9 pc:mb-[64px]">
                <h1 className="font-caviar text-3xl mb-6 tab:mb-0 tab:text-4xl pc:text-6xl">
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
                <p className="tab:w-[360px] tab:ml-[52%] tab:mr-0 pc:w-[536px]">
                    <span className="text-purple-100">
                        {getTranslation("goalAccent")}
                    </span>
                    {getTranslation("goalDescription")}
                </p>
            </div>
        </Section>
    );
};
