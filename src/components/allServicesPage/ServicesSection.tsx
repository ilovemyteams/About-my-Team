import { useLocale } from "next-intl";

import { servicesData } from "@/src/mockedData/servicesDara";
import { Link } from "@/src/navigation";
import { LocaleType } from "@/types/LocaleType";

import { PageSection } from "../shared/PageSection";

export const ServicesSection = () => {
    const locale = useLocale();

    return (
        <PageSection className="mb-[80px] tab:mb-[100px] desk:mb-[120px]">
            {servicesData.map(service => (
                <div key={service.slug} className="p-4 text-3xl">
                    <Link href={`/services/${service.slug}`}>
                        {service[locale as LocaleType].name}
                    </Link>
                </div>
            ))}
        </PageSection>
    );
};
