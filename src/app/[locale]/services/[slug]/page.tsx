import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

import { Service } from "@/src/components/someServicePage/Service";
import { servicesData, ServiceType } from "@/src/mockedData/servicesData";
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
    const normalizedTitle =
        localization.name[0].toUpperCase() + localization.name.slice(1);

    return {
        title: normalizedTitle,
        description: localization.shortDescription,
        openGraph: {
            description: localization.shortDescription,
            title: normalizedTitle,
        },
    };
}

export default function ServicePage({ params }: ServicePageProps) {
    const currentService = servicesData.find(item => item.slug === params.slug);

    if (!currentService) {
        return notFound();
    }
    return <Service service={currentService} />;
}
