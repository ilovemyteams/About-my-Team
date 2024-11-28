import { DescriptionType } from "@/src/mockedData/servicesData";

import { LayoutTitle } from "../shared/LayoutTitle";
import { ChessboardListWithIcons } from "./ChessboardListWithIcons";

export const ChessboardListWithIconsLayout = ({
    description,
    title,
}: {
    description: DescriptionType[];
    title?: string;
}) => {
    return (
        <>
            {title && <LayoutTitle text={title} />}
            <ChessboardListWithIcons description={description} />
        </>
    );
};
