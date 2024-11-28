import { DescriptionType } from "@/src/mockedData/servicesData";

import { ChessboardListItem } from "./ChessboardListItem";

export const ChessboardListWithIcons = ({
    description,
}: {
    description: DescriptionType[];
}) => {
    return (
        <ul className="">
            {description.map((item, index) => (
                <li
                    key={index}
                    className="flex flex-row-reverse gap-[14px] tab:gap-[1.32%] pc:gap-[4.537%] desk:gap-[2.1%] mb-8 last:mb-0 tab:mb-6 tab:odd:flex-row"
                >
                    <ChessboardListItem
                        item={item}
                        isLast={index === description.length - 1}
                    />
                </li>
            ))}
        </ul>
    );
};
