"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { localeInURL } from "@/src/utils/localeInURL";

import { GoBackButton } from "../shared/GoBackButton";
import { IconHome } from "../shared/Icons/IcomHome";
import LocaleSwitcher from "../shared/LocaleSwitcher";
import { ThemeSwitcher } from "../shared/ThemeSwitcher";

interface PageTopSectionProps {
    breadcrumbsList: { title: string; url: string }[];
}

export const PageTopSection = ({ breadcrumbsList }: PageTopSectionProps) => {
    const getTranslation = useTranslations("Breadcrumbs");
    const locale = useLocale();
    return (
        <>
            <div className="hidden pc:mb-10 pc:flex gap-[204px] justify-end relative z-10">
                <LocaleSwitcher />
                <ThemeSwitcher id="HeroSectionThemeSwitcher" />
            </div>
            <div className="flex items-center justify-between mb-4 tab:mb-9 pc:mb-12 desk:mb-[52px] max-w-full gap-6">
                <Breadcrumbs
                    separator="/"
                    classNames={{
                        list: "flex-nowrap max-w-full",
                        base: "overflow-hidden",
                    }}
                    itemClasses={{
                        separator: "px-1",
                        item: "dark:text-purple-50 text-greyLight text-xs pc:text-sm desk:text-base dark:pc:hover:text-red pc:hover:text-redLight dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300 dark:active:text-red active:text-redLight",
                    }}
                >
                    <BreadcrumbItem href={`/${localeInURL(locale)}`}>
                        <span className="hidden tab:block">
                            {getTranslation("breadcrumbItemHome")}
                        </span>
                        <IconHome className="tab:hidden" />
                    </BreadcrumbItem>
                    {breadcrumbsList.map((item, index, array) => {
                        const lastIndex = array.length - 1;
                        if (index === lastIndex) {
                            return (
                                <BreadcrumbItem
                                    key={item.title}
                                    className="flex-1 overflow-hidden"
                                >
                                    <p className="dark:text-red text-redLight max-w-full truncate">
                                        {item.title}
                                    </p>
                                </BreadcrumbItem>
                            );
                        }
                        return (
                            <BreadcrumbItem
                                key={item.url}
                                href={`/${localeInURL(locale)}${item.url}`}
                            >
                                {item.title}
                            </BreadcrumbItem>
                        );
                    })}
                </Breadcrumbs>
                <div className="flex justify-end">
                    <GoBackButton />
                </div>
            </div>
        </>
    );
};
