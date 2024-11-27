import { DescriptionType } from "@/src/mockedData/servicesData";

import { PageSection } from "../../shared/PageSection";
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
            {title && (
                <h2 className="font-caviar text-2xlb tab:text-4xl pc:text-5xl desk:text-6xl dark:text-white-200 text-purple-200 mb-10 tab:mb-[64px] pc:mb-[80px]">
                    {title}
                </h2>
            )}
            <ChessboardListWithIcons description={description} />
        </>
    );
};
