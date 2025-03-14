"use client";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { localeInURL } from "@/src/utils/localeInURL";

import { GoBackButton } from "./GoBackButton";
import { IconHome } from "./Icons/IcomHome";
import LocaleSwitcher from "./LocaleSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";

interface PageTopSectionProps {
    breadcrumbsList: { title: string; url: string }[];
    searchTerm?: string;
}

export const PageTopSection = ({
    breadcrumbsList,
    searchTerm,
}: PageTopSectionProps) => {
    const getTranslation = useTranslations("Breadcrumbs");
    const locale = useLocale();
    const breadcrumbWithQuery = (
        breadcrumb: string,
        querifiedBreadcrumbs: string[]
    ) => {
        const trailingParam =
            searchTerm && querifiedBreadcrumbs.includes(breadcrumb)
                ? `?query=${searchTerm}`
                : "";
        return `/${localeInURL(locale)}${breadcrumb}${trailingParam}`;
    };
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
                                        {item.title[0].toUpperCase() +
                                            item.title.slice(1)}
                                    </p>
                                </BreadcrumbItem>
                            );
                        }
                        return (
                            <BreadcrumbItem
                                key={item.url}
                                href={breadcrumbWithQuery(item.url, ["faq"])}
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
