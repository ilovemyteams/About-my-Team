import { MainContentProps } from "@/types/Faqs.types";

import { IconHexagonsCircle } from "../../shared/Icons/IconHexagonsCircle";
import { IconHexagonsVertical } from "../../shared/Icons/IconHexagonsVertical";
import { HighlightText } from "../../shared/Search/HighlightText";
import { MarkedList } from "./MarkedList";
// import { MarkedList } from "./MarkedList";

export const MarkedListContent = ({
    content,
    title,
    topText,
    searchTerm,
}: MainContentProps) => {
    const decorate = 1;
    return (
        <div>
            {title && (
                <h2 className="mb-10 tab:mb-16 pc:mb-20 font-caviar text-2xlb tab:text-4xl pc:text-5xl desk:text-6xl text-purple-200 dark:text-white-200">
                    <HighlightText text={title} toBeHighlighted={searchTerm} />
                </h2>
            )}
            {topText && (
                <p className="mb-6 tab:mb-10 desk:mb-15 tab:w-[70%] pc:w-[56%] desk:w-[53%] text-greyLight dark:text-grey text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 whitespace-pre-wrap">
                    <HighlightText
                        text={topText}
                        toBeHighlighted={searchTerm}
                    />
                </p>
            )}
            <div className="flex gap-4 pc:gap-[50px] pc:mb-15">
                {decorate === 1 ? (
                    <IconHexagonsVertical className="hidden tab:block  text-purple-100 dark:text-purple-stroke m-auto tab:min-w-[118px] tab:w-[16%] tab:max-w-[160px] pc:min-w-[160px] pc:w-[15%] pc:max-w-[210px] desk:min-w-[210px] desk:w-[18%]" />
                ) : (
                    <IconHexagonsCircle className="hidden tab:block  text-purple-100 dark:text-purple-stroke m-auto tab:min-w-[247px] tab:w-[34%] tab:max-w-[335px] pc:min-w-[335px] pc:w-[31%] pc:max-w-[450px] desk:min-w-[450px] desk:w-[37%]" />
                )}
                {content && (
                    <MarkedList items={content} searchTerm={searchTerm} />
                )}
            </div>
        </div>
    );
};
