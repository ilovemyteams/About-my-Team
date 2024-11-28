import { ServiceContentType } from "@/src/mockedData/servicesData";

import { PageSection } from "../shared/PageSection";
import { ChessboardListWithIconsLayout } from "./ChessboardListWithIcons/ChessboardListWithIconsLayout";
import { ColumnList } from "./ColumnList/ColumnList";
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
                        <PageSection
                            key={index}
                            className="pb-[80px] tab:pb-[100px] pc:pb-[160px] desk:pb-[180px] pc:pt-[100px] desk:pt-[120px]"
                        >
                            <ChessboardListWithIconsLayout
                                title={item.title}
                                description={item.description}
                            />
                        </PageSection>
                    );
                }
                if (item.layout === 4) {
                    return (
                        <PageSection
                            key={index}
                            className="pb-8 tab:pb-[100px] pc:pb-[160px] desk:pb-[180px]"
                        >
                            <ListWithArrowIconLayout
                                title={item.title}
                                description={item.description}
                            />
                        </PageSection>
                    );
                }
            })}
        </>
    );
};
