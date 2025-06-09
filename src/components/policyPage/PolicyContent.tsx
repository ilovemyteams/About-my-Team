import { useLocale } from "next-intl";

import { TextDocItem } from "@/src/components/shared/TextDocLayout/TextDocItem";
import { policyData } from "@/src/mockedData/privacyPolicy";
import { LocaleType } from "@/types/LocaleType";

import { PageSection } from "../shared/PageSection";
import { TextDocHighlightedText } from "../shared/TextDocLayout/TextDocHighlightedText";

export const PolicyContent = () => {
    const locale = useLocale();
    const { title, data, publishDate } = policyData[locale as LocaleType];

    return (
        <PageSection className=" pb-[32px]  tab:pb-[40px] pc:pb-[100px] desk:pb-[120px] ">
            <div className="mb-9 tab:mb-[60px] pc:mb-[72px] desk:mb-[80px] tab:flex tab:justify-between items-end">
                <h1 className="font-caviar font-bold text-purple-200 dark:text-grey text-3xl tab:text-4xl pc:text-6xlt  desk:text-7xl ">
                    <TextDocHighlightedText text={title} />
                </h1>
                <p className="text-redLight dark:text-red font-bold text-base mt-2 tab:mt-0 pc:text-lg ">
                    {publishDate}
                </p>
            </div>

            <ul className="flex flex-col gap-8 tab:gap-10 pc:gap-[100px] desk:gap-[120px]">
                {data.map((item, index) => (
                    <TextDocItem key={index} index={index} {...item} />
                ))}
            </ul>
        </PageSection>
    );
};
