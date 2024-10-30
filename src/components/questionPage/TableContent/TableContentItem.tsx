import { LongAnswerListTypeItem } from "@/src/mockedData/questionsData";

import { HighlightText } from "../../shared/Search/HighlightText";
import { Block } from "./Block";

export const TableContentItem = ({
    content,
    searchTerm,
}: {
    content: LongAnswerListTypeItem;
    searchTerm: string;
}) => {
    const { title, text } = content;

    return (
        <div>
            <div className="mb-6 pc:mb-[80px] mt-6">
                {title && (
                    <h3 className="min-h-[50px] desk:min-h-[70px] flex gap-2 font-caviar text-xlb desk:text-3xl dark:text-white-200 text-purple-200 before:m-[3px] desk:before:m-[7px] before:w-[18px] before:shrink-0 before:block before:h-[18px] dark:before:border-red before:border-redLight before:border-[3px]">
                        <HighlightText
                            text={title}
                            toBeHighlighted={searchTerm}
                        />
                    </h3>
                )}
            </div>
            <ul>
                {text.map((item, index) => (
                    <Block item={item} key={index} searchTerm={searchTerm} />
                ))}
            </ul>
        </div>
    );
};
