import { LongAnswerListTypeItem } from "@/src/mockedData/questionsData";

import { HighlightText } from "../../shared/Search/HighlightText";
import { LayoutTitle } from "../shared/LayoutTitle";
import { RedArrowDecoration } from "../shared/RedArrowDecoration";
import { NumberedListContentItem } from "./NumberedListContentItem";

interface NumberedListContentProps {
    content: LongAnswerListTypeItem[];
    searchTerm: string;
    title?: string;
    text?: string;
}

export const NumberedListContent = ({
    content,
    searchTerm,
    title,
    text,
}: NumberedListContentProps) => {
    return (
        <div>
            {title && (
                <LayoutTitle className="mb-6 tab:mb-10 pc:mb-16">
                    <HighlightText text={title} toBeHighlighted={searchTerm} />
                </LayoutTitle>
            )}

            <div className="flex flex-col tab:flex-row justify-start gap-8 ">
                <div className="tab:w-[75%] pc:w-[56%] desk:w-[59%]">
                    {text && (
                        <p className="mb-6 tab:mb-10 desk:mb-20  text-greyLight dark:text-grey text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 whitespace-pre-wrap">
                            <HighlightText
                                text={text}
                                toBeHighlighted={searchTerm}
                            />
                        </p>
                    )}
                    <ol className="tab:max-w-[517px] pc:max-w-[688px] desk:max-w-[836px] flex flex-col gap-6 tab:gap-10 pc:gap-[60px]">
                        {content.map((item, i) => (
                            <NumberedListContentItem
                                key={i}
                                item={item}
                                indx={i}
                                searchTerm={searchTerm}
                            />
                        ))}
                    </ol>
                </div>

                <RedArrowDecoration />
            </div>
        </div>
    );
};
