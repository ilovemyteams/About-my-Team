import { CurrentQuestionMainContentItemType } from "@/types/Faqs.types";

import { IconCheck } from "../../shared/Icons/IconCheck";
import { HighlightText } from "../../shared/Search/HighlightText";
import { LayoutPortableTextBlock } from "../shared/LayoutPortableTextBlock";

interface MarkedListProps {
    items: CurrentQuestionMainContentItemType[];
    searchTerm: string;
}

export const MarkedList = ({ items, searchTerm }: MarkedListProps) => {
    return (
        <ul className="flex flex-col gap-5 tab:gap-6 desk:gap-10 w-full tab:w-[58%] pc:w-[56%] desk:w-[50%]">
            {items.map(({ contentBlockText, contentBlockTitle }, index) => {
                return (
                    <li key={index} className="flex gap-2 pc:gap-3 items-start">
                        <div>
                            <IconCheck className="w-6 h-auto dark:text-red text-redLight" />
                        </div>
                        <div>
                            {contentBlockTitle && (
                                <h3 className="font-caviar text-lg tab:text-xlb pc:text-2xlb desk:text-4xl text-purple-200 dark:text-white-200">
                                    <HighlightText
                                        text={contentBlockTitle}
                                        toBeHighlighted={searchTerm}
                                    />
                                </h3>
                            )}
                            {contentBlockText && (
                                <LayoutPortableTextBlock
                                    searchTerm={searchTerm}
                                    value={contentBlockText}
                                />
                            )}
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
