import { useTranslations } from "next-intl";

import { FilterAllProjects } from "@/src/components/allProjectsPage/FilterAllProjects";

import { PageTopSection } from "../shared/PageTopSection";

export const Header = ({ selectedCategory }: { selectedCategory: string }) => {
    const getTranslation = useTranslations();

    const breadcrumbs = [
        {
            title: getTranslation("Breadcrumbs.breadcrumbItemPortfolio"),
            url: "",
        },
    ];

    const titleKey = `PortfolioPage${selectedCategory !== "AllProjects" ? selectedCategory : ""}.title`;
    const textKey = `PortfolioPage${selectedCategory !== "AllProjects" ? selectedCategory : ""}.text`;

    const title = getTranslation.rich(titleKey, {
        purple: chunk => (
            <span className="text-purple-100 tab:whitespace-pre-wrap">
                {chunk}
            </span>
        ),
    });

    const text = getTranslation(textKey);

    return (
        <section className="container max-w-[540px] tab:max-w-full desk:max-w-[1456px] pt-8 pb-6 tab:pt-12 pc:pt-8 desk:pb-[80px] tab:pb-10 pc:pb-[60px] ">
            <PageTopSection breadcrumbsList={breadcrumbs} />
            <h1 className="font-caviar text-3xl tab:text-4xl pc:text-6xl desk:text-7xl tab:mb-10 pc:mb-[64px] desk:mb-[80px] text-purple-200 dark:text-grey">
                {title}
            </h1>
            <div className="mt-6 flex flex-col pc:gap-14 tab:gap-10 gap-5 justify-between pc:flex-row tab:flex-col-reverse ">
                <FilterAllProjects />
                <p className="desk:text-2xl34 font-geist tab:max-w-[734px] pc:text-xl tab:text-base">
                    {text}
                </p>
            </div>
        </section>
    );
};
