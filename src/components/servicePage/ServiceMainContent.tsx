import { ServiceContentType } from "@/src/mockedData/servicesData";

import { PageSection } from "../shared/PageSection";
import { ChessboardListWithIconsLayout } from "./ChessboardListWithIcons/ChessboardListWithIconsLayout";
import { ListWithArrowIconLayout } from "./ListWithArrowIconLayout";

interface ServiceMainContentProps {
    content: ServiceContentType[];
}

export const ServiceMainContent = ({ content }: ServiceMainContentProps) => {
    // зробити як в main content як question main content
    return (
        <>
            {content.map((item, index) => {
                if (item.layout === 1) {
                    return <div key={index}>{item.title} - layout 1 </div>;
                }

                if (item.layout === 2) {
                    return <div key={index}> {item.title} - layout 2 </div>;
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
