import { ListTextItemType } from "@/src/mockedData/questionsData";

import { IconCheck } from "../../shared/Icons/IconCheck";
import { HighlightText } from "../../shared/Search/HighlightText";

interface BulletedListItemProps {
    items: ListTextItemType[];
    searchTerm: string;
}

export const BulletedListItem = ({
    items,
    searchTerm,
}: BulletedListItemProps) => {
    return (
        <ul className="flex flex-col gap-5 tab:gap-6 w-full tab:w-[58%] pc:w-[55%]">
            {items.map((item, index) => {
                return (
                    <li key={index} className="flex gap-2 pc:gap-3 items-start">
                        <div>
                            <IconCheck className="w-6 h-auto dark:text-red text-redLight" />
                        </div>
                        <div>
                            {item.title && (
                                <h3 className="font-caviar text-lg tab:text-xlb pc:text-2xlb text-purple-200 dark:text-white-200">
                                    <HighlightText
                                        text={item.title as string}
                                        toBeHighlighted={searchTerm}
                                    />
                                </h3>
                            )}
                            {item.text.length > 0 && (
                                <p className="max-w-full text-sm20 tab:text-base23 pc:text-xl28 text-greyLight dark:text-grey">
                                    <HighlightText
                                        text={item.text.join("")}
                                        toBeHighlighted={searchTerm}
                                    />
                                </p>
                            )}
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
