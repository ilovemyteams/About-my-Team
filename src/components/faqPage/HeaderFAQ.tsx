import { useTranslations } from "next-intl";

import { PageTopSection } from "../shared/PageTopSection";
import Search from "../shared/Search/Search";

type HeaderFAQProps = {
    itemsQuantity: number;
    searchTerm: string;
};

export const HeaderFAQ = ({ itemsQuantity, searchTerm }: HeaderFAQProps) => {
    const getTranslation = useTranslations();
    const breadcrumbs = [
        { title: getTranslation("Breadcrumbs.breadcrumbItemFaq"), url: "" },
    ];

    const quantityString = getTranslation(
        `Q&A.${searchTerm ? "foundAnswerQuantity" : "questionQuantity"}`
    );
    return (
        <section className="container max-w-[540px] tab:max-w-full desk:max-w-[1456px] pt-8 tab:pt-12 pc:pt-8">
            <PageTopSection breadcrumbsList={breadcrumbs} />
            <div className="mb-[21px] tab:mb-12 pc:mb-[56px]">
                <h1 className="font-caviar text-purple-200 dark:text-grey text-3xl tab:text-4xl pc:text-6xl desk:text-7xl">
                    {getTranslation("Q&A.pageBigTitle")}
                </h1>
            </div>
            <div className="flex flex-col-reverse gap-6 tab:flex-row justify-between pb-6 tab:pb-9 pc:pb-12 border-b border-purple-strokeLight dark:border-purple-stroke">
                <p className="my-auto text-sm tab:text-base text-purple-100 dark:text-purple-50">
                    {quantityString}
                    {itemsQuantity}
                </p>
                <Search />
            </div>
        </section>
    );
};
