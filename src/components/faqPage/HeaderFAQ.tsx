import { useTranslations } from "next-intl";

import { HeaderToolbox } from "@/src/components/shared/HeaderToolbox";
import Search from "@/src/components/shared/Search";
import { questionsData } from "@/src/mockedData/questionsData";

export const HeaderFAQ = () => {
    const getTranslations = useTranslations("Q&A");
    return (
        <section className="container max-w-[540px] tab:max-w-full desk:max-w-[1456px] pt-8 tab:pt-12 pc:pt-8">
            <HeaderToolbox />
            <div className="flex flex-col tab:flex-row gap-2.5 tab:gap-[14px]">
                <h1 className="font-caviar text-purple-200 dark:text-grey text-3xl tab:text-4xl pc:text-6xl">
                    {getTranslations("pageBigTitle")}
                </h1>
            </div>
            <div className="flex flex-col tab:flex-row-reverse justify-between ">
                <Search />
                <p className="my-auto text-sm tab:text-base text-purple-100 dark:text-purple-50">
                    {getTranslations("questionQuantity")}
                    {questionsData.length}
                </p>
            </div>
        </section>
    );
};
