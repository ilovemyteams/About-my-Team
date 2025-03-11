"use client";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

import { FilterAllProjects } from "@/src/components/allProjectsPage/FilterAllProjects";
import { projectCategories } from "@/src/mockedData/allProjectsData";

import { PageTopSection } from "../shared/PageTopSection";

export const Header = () => {
    const getTranslation = useTranslations();
    const searchParams = useSearchParams();
    const selectedCategory =
        searchParams.get("category") || projectCategories.ALL_PROJECTS;

    const breadcrumbs = [
        {
            title: getTranslation("Breadcrumbs.breadcrumbItemPortfolio"),
            url: "",
        },
    ];

    const titleKey = `PortfolioPage${selectedCategory !== projectCategories.ALL_PROJECTS ? selectedCategory : ""}.title`;
    const textKey = `PortfolioPage${selectedCategory !== projectCategories.ALL_PROJECTS ? selectedCategory : ""}.text`;

    const title = getTranslation.rich(titleKey, {
        purple: chunk => (
            <span className="text-purple-100 tab:whitespace-pre-wrap">
                {chunk}
            </span>
        ),
    });

    const text = getTranslation(textKey);

    return (
        <section className="container max-w-[540px] tab:max-w-full desk:max-w-[1456px] pt-8 tab:pt-12 pc:pt-8 pb-[80px] tab:pb-10 pc:pb-[60px] desk:mb-[80px]">
            <PageTopSection breadcrumbsList={breadcrumbs} />
            <h1 className="font-caviar text-3xl tab:text-4xl pc:text-6xl desk:text-7xl mb-6 tab:mb-10 pc:mb-[64px] desk:mb-[80px] text-purple-200 dark:text-grey">
                {title}
            </h1>
            <div className="flex mb-6 tab:mb-10 pc:mb-[60px] desk:mb-[80px] gap-15">
                <FilterAllProjects />
                <p className="mb-6 tab:mb-10 pc:mb-[60px] desk:mb-[80px] tab:w-[540px]">
                    {text}
                </p>
            </div>
            <div
                aria-label="decoration line"
                className="w-full h-[1px] dark:bg-purple-stroke purple-strokeLight"
            ></div>
        </section>
    );
};
