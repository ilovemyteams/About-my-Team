import { useTranslations } from "next-intl";

import { PageTopSection } from "../shared/PageTopSection";

export const Header = () => {
    const getTranslation = useTranslations();
    const breadcrumbs = [
        {
            title: getTranslation("Breadcrumbs.breadcrumbItemPortfolio"),
            url: "",
        },
    ];

    const title = getTranslation.rich("PortfolioPage.title", {
        purple: chunk => (
            <span className="text-purple-100 tab:whitespace-pre-wrap">
                {chunk}
            </span>
        ),
    });
    return (
        <section
            className="container max-w-[540px] tab:max-w-full desk:max-w-[1456px] pt-8 tab:pt-12 pc:pt-8
        pb-[80px] tab:pb-10 pc:pb-[60px] desk:mb-[80px]"
        >
            <PageTopSection breadcrumbsList={breadcrumbs} />
            <h1 className="font-caviar text-3xl tab:text-4xl pc:text-6xl desk:text-7xl mb-6 tab:mb-10 pc:mb-[64px] desk:mb-[80px] text-purple-200 dark:text-grey">
                {title}
            </h1>
            <p
                className=" mb-6 tab:mb-10 pc:mb-[60px] desk:mb-[80px]
            tab:w-[540px] pc:w-[570px] desk:w-[638px]"
            >
                {getTranslation("PortfolioPage.text")}
            </p>
            <div
                aria-label="decoration line"
                className="w-full h-[1px] dark:bg-purple-stroke purple-strokeLight"
            ></div>
        </section>
    );
};
