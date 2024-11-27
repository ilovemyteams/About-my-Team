import { ServiceContentType } from "@/src/mockedData/servicesData";
import { ListWithArrowIconLayout } from "./ListWithArrowIconLayout";

interface ServiceMainContentProps {
    content: ServiceContentType[];
}

export const ServiceMainContent = ({ content }: ServiceMainContentProps) => {
    // зробити як в main content як question main content
    return (
        <div>
            {content.map((item, index) => {
                if (item.layout === 1) {
                    return <div key={index}>{item.title} - layout 1 </div>;
                }

                if (item.layout === 2) {
                    return <div key={index}> {item.title} - layout 2 </div>;
                }

                if (item.layout === 3) {
                    return <div key={index}>{item.title} - layout 3 </div>;
                }
                if (item.layout === 4) {
                    return (
                        <div key={index}>
                            <ListWithArrowIconLayout
                                title={item.title}
                                description={item.description}
                            />
                        </div>
                    );
                }
            })}
        </div>
    );
};
