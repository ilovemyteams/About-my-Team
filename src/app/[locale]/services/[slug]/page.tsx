import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

import { Service } from "@/src/components/servicePage/Service";
import { servicesData, ServiceType } from "@/src/mockedData/servicesDara";
import { LocaleType } from "@/types/LocaleType";

interface ServicePageProps {
    params: {
        slug: string;
        locale: string;
    };
}

export async function generateMetadata({
    params,
}: ServicePageProps): Promise<Metadata> {
    const displayedService: ServiceType | undefined = servicesData.find(
        service => service.slug === params.slug
    );

    if (!displayedService) {
        return {
            title: "Service Not Found",
            description: "The requested service does not exist.",
        };
    }

    const localization = displayedService[params.locale as LocaleType];
    return {
        title: localization.name,
        description: localization.shortDescription,
    };
}

export default function ServicePage({ params }: ServicePageProps) {
    const currentService = servicesData.find(item => item.slug === params.slug);

    if (!currentService) {
        return notFound();
    }
    return <Service service={currentService} />;
}
