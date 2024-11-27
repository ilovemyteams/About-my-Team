import { servicesData } from "@/src/mockedData/servicesData";

import { PageSection } from "../shared/PageSection";
import { ServiceCard } from "./ServiceCard";

export const ServicesSection = () => {
    return (
        <PageSection className="mb-[80px] tab:mb-[100px] desk:mb-[120px] items-center pc:pb-[60px]">
            <div className="tab:grid tab:grid-cols-4 pc:grid-cols-6 tab:gap-x-6 pc:gap-x-0 pc:border-t-[1px] border-purple-strokeLight dark:border-purple-stroke ">
                {servicesData.map(service => (
                    <ServiceCard
                        service={service}
                        key={service.slug}
                        servicesCount={servicesData.length}
                    />
                ))}
            </div>
        </PageSection>
    );
};
