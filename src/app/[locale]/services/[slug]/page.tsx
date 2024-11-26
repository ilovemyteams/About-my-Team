import { notFound } from "next/navigation";
import { useLocale } from "next-intl";
import React from "react";

import { ServiceCtaSection } from "@/src/components/servicePage/ServiceCtaSection";
import { ServiceHeader } from "@/src/components/servicePage/ServiceHeader";
import { ServiceHero } from "@/src/components/servicePage/ServiceHero";
import { ServiceMainContent } from "@/src/components/servicePage/ServiceMainContent";
import { UnderConstruction } from "@/src/components/underConstruction/UnderConstruction";
import { servicesData } from "@/src/mockedData/servicesDara";
import { LocaleType } from "@/types/LocaleType";

interface ServicePageProps {
    params: {
        slug: string;
    };
}

const ServicePage: React.FC<ServicePageProps> = ({ params }) => {
    const locale = useLocale();
    const currentService = servicesData.find(
        service => service.slug === params.slug
    );
    if (!currentService) {
        notFound();
    }

    const { fullDescription, name } = currentService[locale as LocaleType];

    return (
        <>
            <ServiceHeader name={name} />
            {fullDescription ? (
                <>
                    <ServiceHero
                        title={fullDescription.title}
                        text={fullDescription.introduction}
                        image={currentService.image}
                    />
                    <ServiceMainContent content={fullDescription.content} />
                    <ServiceCtaSection
                        text={fullDescription.ctaText}
                        button={currentService.ctaButton}
                    />
                </>
            ) : (
                <UnderConstruction />
            )}
        </>
    );
};

export default ServicePage;
