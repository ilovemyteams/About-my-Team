import { useLocale } from "next-intl";
import React from "react";

import { ofertaData } from "@/src/mockedData/ofertaData";
import { parsePolicyLinks } from "@/src/utils/parsePolicyLinks";
import { LocaleType } from "@/types/LocaleType";

import { PageSection } from "../shared/PageSection";
import { TextDocHighlightedText } from "../shared/TextDocLayout/TextDocHighlightedText";
import { TextDocItem } from "../shared/TextDocLayout/TextDocItem";

export const OfertaContent = () => {
    const locale = useLocale();
    const { data, title, description, definitions } =
        ofertaData[locale as LocaleType];

    return (
        <PageSection className="pb-[32px] tab:pb-[40px] pc:pb-[100px] desk:pb-[120px] text-sm20 text-balance tab:text-pretty tab:text-base23 pc:text-xl28 desk:text-2xl">
            <div className="mb-9 tab:mb-[52px] desk:mb-[80px] tab:flex tab:justify-between items-end">
                <h1 className="font-caviar font-bold text-purple-200 dark:text-grey text-3xl tab:text-4xl pc:text-6xlt  desk:text-7xl text-pretty">
                    <TextDocHighlightedText text={title} />
                </h1>
            </div>
            <p className="mb-4 tab:mb-5 pc:mb-10">{description}</p>

            <div className=" mb-8 tab:mb-10 pc:mb-[100px] desk:mb-[120px]">
                <h3 className="font-caviar font-bold text-2xl tab:text-4xl text-purple-200 whitespace-pre-wrap dark:text-white-200 pc:text-6xl desk:text-6xlt mb-4 tab:mb-5 pc:mb-10 ">
                    {definitions.title}
                </h3>
                <ul className="flex flex-col gap-4 pb-4 border-b-[1px] border-purple-strokeLight dark:border-purple-stroke tab:pb-6 tab:gap-5 pc:pb-10 pc:gap-10 desk:pb-[64px] ">
                    {definitions.content.map(({ title, text }, index) => (
                        <li key={index}>
                            <p>
                                <span className="font-bold font-caviar text-purple-200 dark:text-white-200">
                                    {title}
                                </span>
                                <span> - </span>
                                <span>{parsePolicyLinks(text, locale)}</span>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            <ul className="flex flex-col gap-8 tab:gap-10 pc:gap-[100px] desk:gap-[120px]">
                {data.map((item, index) => (
                    <TextDocItem key={index} index={index} {...item} />
                ))}
            </ul>
        </PageSection>
    );
};
