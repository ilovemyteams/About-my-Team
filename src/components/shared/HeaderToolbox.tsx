"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";

import { localeInURL } from "@/src/utils/localeInURL";

import { GoBackButton } from "../shared/GoBackButton";
import LocaleSwitcher from "../shared/LocaleSwitcher";
import { ThemeSwitcher } from "../shared/ThemeSwitcher";

export const HeaderToolbox = () => {
    const getTranslationBreadcrumbs = useTranslations("Breadcrumbs");
    const locale = useLocale();
    return (
        <>
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
                            {getTranslationBreadcrumbs("breadcrumbItemFaq")}
                        </p>
                    </BreadcrumbItem>
                </Breadcrumbs>
                <div className="flex justify-end">
                    <GoBackButton />
                </div>
            </div>
        </>
    );
};
{
    /* // <section className="container pt-8 tab:pt-12 pc:pt-8 max-w-[540px] tab:max-w-full desk:max-w-[1456px]"> */
}
