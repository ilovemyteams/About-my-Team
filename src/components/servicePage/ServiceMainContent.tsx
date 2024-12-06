import { ServiceContentType } from "@/src/mockedData/servicesData";

import { ChessboardListWithIconsLayout } from "./ChessboardListWithIcons/ChessboardListWithIconsLayout";
import { ColumnList } from "./ColumnList/ColumnList";
import { GridWithCheckmarkIcons } from "./GridWithCheckmarkIcons/GridWithCheckMarkIcons";
import { ListWithArrowIconLayout } from "./ListWithArrowIconLayout";
import { TwoSideListWithLines } from "./TwoSideListWithLines/TwoSideListWithLines";

interface ServiceMainContentProps {
    content: ServiceContentType[];
}

export const ServiceMainContent = ({ content }: ServiceMainContentProps) => {
    // зробити як в main content як question main content
    return (
        <>
            {content.map((item, index) => {
                if (item.layout === 1) {
                    return <TwoSideListWithLines key={index} content={item} />;
                }

                if (item.layout === 2) {
                    return <ColumnList key={index} content={item} />;
                }

                if (item.layout === 3) {
                    return (
                        <ChessboardListWithIconsLayout
                            key={index}
                            title={item.title}
                            description={item.description}
                        />
                    );
                }
                if (item.layout === 4) {
                    return (
                        <ListWithArrowIconLayout
                            key={index}
                            title={item.title}
                            description={item.description}
                        />
                    );
                }
                if (item.layout === 5) {
                    return (
                        <GridWithCheckmarkIcons key={index} content={item} />
                    );
                }
            })}
        </>
    );
};
