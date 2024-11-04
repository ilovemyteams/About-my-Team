import { LongAnswerListType } from "@/src/mockedData/questionsData";
import { ListTextItemType } from "@/src/mockedData/questionsData";

import { IconHexagonsCircle } from "../../shared/Icons/IconHexagonsCircle";
import { IconHexagonsVertical } from "../../shared/Icons/IconHexagonsVertical";
import { HighlightText } from "../../shared/Search/HighlightText";
import { BulletedListItem } from "./BulletedListItem";

interface BulletedListProps {
    content: LongAnswerListType;
    searchTerm: string;
}

export const BulletedList = ({ content, searchTerm }: BulletedListProps) => {
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
                <p className="mb-6 tab:mb-10 desk:mb-15 tab:w-[50%] pc:w-[55%] desk:w-[45%] text-greyLight dark:text-grey text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34">
                    <HighlightText
                        text={subtitle}
                        toBeHighlighted={searchTerm}
                    />
                </p>
            )}
            <div className="flex gap-4 pc:gap-[50px] pc:mb-15">
                <div className="hidden tab:block m-auto text-white-100 dark:text-purple-stroke">
                    {decorate === 1 ? (
                        <IconHexagonsVertical className="tab:w-[120px] tab:h-[309] pc:w-[162px] pc:h-[425px]" />
                    ) : (
                        <IconHexagonsCircle className="tab:w-[249px] tab:h-[251px] pc:w-[337px] pc:h-[343px]" />
                    )}
                </div>
                <BulletedListItem
                    items={text as ListTextItemType[]}
                    searchTerm={searchTerm}
                />
            </div>
        </div>
    );
};
