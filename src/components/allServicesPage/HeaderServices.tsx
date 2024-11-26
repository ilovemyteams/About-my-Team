import { useTranslations } from "next-intl";

import { PageTopSection } from "../shared/PageTopSection";

export const HeaderServices = () => {
    const getTranslation = useTranslations();
    const breadcrumbs = [
        {
            title: getTranslation("Breadcrumbs.breadcrumbItemServices"),
            url: "",
        },
    ];

    const title = getTranslation.rich("ServicesPage.title", {
        purple: chunk => (
            <span className="text-purple-100 tab:whitespace-pre-wrap">
                {chunk}
            </span>
        ),
    });
    return (
        <section className="container max-w-[540px] tab:max-w-full desk:max-w-[1456px] pt-8 tab:pt-12 pc:pt-8">
            <PageTopSection breadcrumbsList={breadcrumbs} />
            <h1 className="font-caviar text-3xl tab:text-4xl pc:text-6xl desk:text-7xl mb-[48px] tab:mb-[64px] pc:mb-[100px] desk:mb-[64px] text-purple-200 dark:text-grey">
                {title}
            </h1>
        </section>
    );
};
