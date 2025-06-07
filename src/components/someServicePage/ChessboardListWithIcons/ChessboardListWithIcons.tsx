import { DescriptionType } from "@/src/mockedData/servicesData";

import { ChessboardAnimatedListItem } from "./ChessboardAnimatedListItem";
import { ChessboardListItem } from "./ChessboardListItem";

export const ChessboardListWithIcons = ({
    description,
}: {
    description: DescriptionType[];
}) => {
    return (
        <ul>
            {description.map((item, index) => (
                <ChessboardAnimatedListItem key={index}>
                    <ChessboardListItem
                        item={item}
                        isLast={index === description.length - 1}
                    />
                </ChessboardAnimatedListItem>
            ))}
        </ul>
    );
};
