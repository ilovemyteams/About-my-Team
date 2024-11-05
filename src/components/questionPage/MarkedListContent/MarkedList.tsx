import { LongAnswerListType } from "@/src/mockedData/questionsData";
import { ListTextItemType } from "@/src/mockedData/questionsData";

import { IconHexagonsCircle } from "../../shared/Icons/IconHexagonsCircle";
import { IconHexagonsVertical } from "../../shared/Icons/IconHexagonsVertical";
import { HighlightText } from "../../shared/Search/HighlightText";
import { MarkedListItem } from "./MarkedListItem";

interface MarkedListProps {
    content: LongAnswerListType;
    searchTerm: string;
}

export const MarkedList = ({ content, searchTerm }: MarkedListProps) => {
    const { title, data } = content;
    const { title: subtitle, decorate, text } = data[0];

    return (
        <div>
            {title && (
                <h2 className="mb-10 tab:mb-16 pc:mb-20 font-caviar text-2xlb tab:text-4xl pc:text-5xl desk:text-6xl text-purple-200 dark:text-white-200">
                    <HighlightText text={title} toBeHighlighted={searchTerm} />
                </h2>
            )}
            {subtitle && (
                <p className="mb-6 tab:mb-10 desk:mb-15 tab:w-[70%] pc:w-[56%] desk:w-[53%] text-greyLight dark:text-grey text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34">
                    <HighlightText
                        text={subtitle}
                        toBeHighlighted={searchTerm}
                    />
                </p>
            )}
            <div className="flex gap-4 pc:gap-[50px] pc:mb-15">
                <div className="hidden tab:block m-auto text-white-100 dark:text-purple-stroke">
                    {decorate === 1 ? (
                        <IconHexagonsVertical className="tab:w-[120px] tab:h-[309] pc:w-[162px] pc:h-[425px] desk:w-[212px] desk:h-[570px]" />
                    ) : (
                        <IconHexagonsCircle className="tab:w-[249px] tab:h-[251px] pc:w-[337px] pc:h-[343px] desk:w-[452px] desk:h-[461px]" />
                    )}
                </div>
                <MarkedListItem
                    items={text as ListTextItemType[]}
                    searchTerm={searchTerm}
                />
            </div>
        </div>
    );
};
