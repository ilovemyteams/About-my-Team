import { LongAnswerListTypeItem } from "@/src/mockedData/questionsData";

import { Lines } from "../../shared/Lines";
import { HighlightText } from "../../shared/Search/HighlightText";
import { TwoSidesListText } from "./TwoSidesListText";

interface TwoSidesListItemProps {
    item: LongAnswerListTypeItem;
    searchTerm: string;
}

export const TwoSidesListItem = ({
    item,
    searchTerm,
}: TwoSidesListItemProps) => {
    const { title, text } = item;
    return (
        <li
            className="group tab:flex tab:even:flex-row-reverse odd:border-b-[1px] tab:border-none border-purple-strokeLight dark:border-purple-stroke 
            odd:mb-6 odd:pb-6 tab:odd:pb-0 even:mb-8 tab:odd:mb-0 tab:even:mb-0 last:border-none last:odd:mb-0 last:odd:pb-0 last:even:mb-0"
        >
            <div
                className="tab:grow-0 tab:shrink-0 tab:group-odd:w-[calc(50%_+_1px)] tab:group-even:w-1/2 tab:border-t-[1px] tab:border-b-[1px] tab:group-even:border-l-[1px] tab:group-odd:border-r-[1px]
            tab:mb-[-1px] border-purple-strokeLight dark:border-purple-stroke tab:px-7 tab:py-6 pc:py-7 overflow-clip"
            >
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
                        <TwoSidesListText
                            key={index}
                            text={text}
                            searchTerm={searchTerm}
                        />
                    ))}
                </ul>
            </div>

            <div className="mt-8 h-[60px] tab:h-auto tab:m-auto flex justify-center group-odd:hidden tab:group-odd:block group-last:hidden">
                <div
                    className="group-[:nth-of-type(4n)]:rotate-180 tab:group-[:nth-of-type(3n+1)]:rotate-90 
                       tab:group-[:nth-of-type(3n)]:rotate-180 tab:group-first:hidden tab:group-last:hidden"
                >
                    <Lines />
                </div>
            </div>
        </li>
    );
};
