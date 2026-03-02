import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import React from "react";

import { Service } from "@/src/components/someServicePage/Service";
import { servicesData, ServiceType } from "@/src/mockedData/servicesData";
import { LocaleType } from "@/types/LocaleType";
import { RouteSlugParams } from "@/types/RoutesType";

interface ServicePageProps {
    params: RouteSlugParams;
}

export async function generateMetadata({
    params,
}: ServicePageProps): Promise<Metadata> {
    const locale = await getLocale();
    const { slug } = await params;
    const displayedService: ServiceType | undefined = servicesData.find(
        service => service.slug === slug
    );

    if (!displayedService) {
        return {
            title: "Service Not Found",
            description: "The requested service does not exist.",
        };
    }

    const localization = displayedService[locale as LocaleType];
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

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const currentService = servicesData.find(item => item.slug === slug);

    if (!currentService) {
        return notFound();
    }
    return <Service service={currentService} />;
}
