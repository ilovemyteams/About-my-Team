import { DescriptionType } from "@/src/mockedData/servicesData";

import { PageSection } from "../../shared/PageSection";
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
        <PageSection className="pb-[80px] tab:pb-[100px] pc:pb-[160px] desk:pb-[180px] pc:pt-[100px] desk:pt-[120px]">
            {title && <LayoutTitle text={title} />}
            <ChessboardListWithIcons description={description} />
        </PageSection>
    );
};
