import { Fragment } from "react";

import { LongAnswerListType } from "@/src/mockedData/questionsData";
import { LocaleType } from "@/types/LocaleType";

import { HighlightText } from "../../shared/Search/HighlightText";

interface ListContentItemsProps {
    item: LongAnswerListType;
    indx: number;
    listStyle: string;
    locale: LocaleType;
    searchTerm: string;
}

export const ListContentItem = ({
    item,
    indx,
    listStyle,
    locale,
    searchTerm,
}: ListContentItemsProps) => {
    const { text, title } = item;
    return (
        <li className="flex flex-row gap-4 tab:gap-10 pc:gap-[60px]">
            <div>
                <p className="font-caviar text-[48px] pc:text-[115px] desk:text-[130px] leading-none font-bold text-purple-strokeLight dark:text-purple-dark sticky top-[15%]">
                    {indx < 10 ? `0${indx + 1}` : indx + 1}
                </p>
            </div>

            <div className="pb-4 tab:pb-6 pc:pb-10 border-b-[1px] border-purple-strokeLight dark:border-purple-stroke">
                <h3 className="font-caviar text-lg tab:text-3xl desk:text-4xl mb-4 tab:mb-6 pc:mb-10 text-purple-200 dark:text-white-200 whitespace-pre-wrap">
                    <HighlightText text={title} toBeHighlighted={searchTerm} />
                </h3>
                <ul>
                    {text.map((text, index) => (
                        <Fragment key={index}>
                            {typeof text === "string" && (
                                <li className={listStyle}>
                                    <p className="text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34">
                                        <HighlightText
                                            text={text}
                                            toBeHighlighted={searchTerm}
                                            locale={locale}
                                        />
                                    </p>
                                </li>
                            )}
                        </Fragment>
                    ))}
                </ul>
            </div>
        </li>
    );
};
