import { LongAnswerListTypeItem } from "@/src/mockedData/questionsData";

import { HighlightText } from "../../shared/Search/HighlightText";
import { NumberedListText } from "./NumberedListText";

interface NumberedListContentItemsProps {
    item: LongAnswerListTypeItem;
    indx: number;
    searchTerm: string;
}

export const NumberedListContentItem = ({
    item,
    indx,
    searchTerm,
}: NumberedListContentItemsProps) => {
    const { text, title, type } = item;

    return (
        <li className="flex flex-row gap-4 tab:gap-10 pc:gap-[60px]">
            <div>
                <p className="font-caviar text-[48px] tab:text-[70px] pc:text-[115px] desk:text-[130px] leading-none font-bold text-purple-strokeLight dark:text-purple-dark sticky top-[15%]">
                    {indx < 10 ? `0${indx + 1}` : indx + 1}
                </p>
            </div>

            <div className="pb-4 tab:pb-6 pc:pb-10 border-b-[1px] border-purple-strokeLight dark:border-purple-stroke">
                {title && (
                    <h3 className="font-caviar text-lg tab:text-2xlb pc:text-3xl desk:text-4xl mb-4 tab:mb-6 pc:mb-10 text-purple-200 dark:text-white-200 whitespace-pre-wrap">
                        <HighlightText
                            text={title}
                            toBeHighlighted={searchTerm}
                        />
                    </h3>
                )}
                <ul>
                    {text.map((text, index) => (
                        <NumberedListText
                            key={index}
                            text={text}
                            type={type}
                            searchTerm={searchTerm}
                        />
                    ))}
                </ul>
            </div>
        </li>
    );
};
