import React from "react";

import { DescriptionType } from "@/src/mockedData/servicesData";

import { IconCheck } from "../../shared/Icons/IconCheck";
import { LayoutText } from "../shared/LayoutText";

interface CheckIconListItemProps {
    item: DescriptionType;
}

export const CheckIconListItem = ({ item }: CheckIconListItemProps) => {
    const { title, text } = item;
    return (
        <li className="flex gap-2 flex-start">
            <span>
                <IconCheck className="text-redLight dark:text-red w-[16px] pc:w-[24px] h-auto mb-auto mt-[2px]" />
            </span>

            <div>
                {title && (
                    <h4 className="font-caviar text-purple-200 dark:text-white-200 text-lg tab:text-xlb desk:text-3xl">
                        {title}
                    </h4>
                )}
                <LayoutText text={text} />
            </div>
        </li>
    );
};
