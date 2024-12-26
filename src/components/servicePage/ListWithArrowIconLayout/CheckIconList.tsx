import { DescriptionType } from "@/src/mockedData/servicesData";

import { CheckIconListItem } from "./CheckIconListItem";

interface CheckListItemProps {
    description: DescriptionType[];
}

export const CheckIconList = ({ description }: CheckListItemProps) => {
    return (
        <ul className="flex flex-col gap-5 tab:w-[75%] pc:w-[55%] grow-0 mb-8 tab:mb-0">
            {description.map((item, index) => (
                <CheckIconListItem key={index} item={item} />
            ))}
        </ul>
    );
};
