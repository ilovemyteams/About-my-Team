import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

import { SomeProjectPage } from "@/src/components/someProjectPage/SomeProjectPage";
import {
    portfolioData,
    PortfolioDataItemType,
} from "@/src/mockedData/portfolioData";
import { LocaleType } from "@/types/LocaleType";

interface ProjectPageProps {
    params: {
        slug: string;
        locale: string;
    };
}

export async function generateMetadata({
    params,
}: ProjectPageProps): Promise<Metadata> {
    const displayedProject: PortfolioDataItemType | undefined =
        portfolioData.find(project => project.data.slug === params.slug);

    if (!displayedProject) {
        return {
            title: "Project Not Found",
            description: "The requested project does not exist.",
        };
    }

    const localization = displayedProject[params.locale as LocaleType];
    const normalizedTitle =
        localization.name[0].toUpperCase() + localization.name.slice(1);

    return {
        title: normalizedTitle,
        description: localization.subtitle,
        openGraph: {
            description: localization.subtitle,
            title: normalizedTitle,
        },
    };
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const currentProject = portfolioData.find(
        item => item.data.slug === params.slug
    );

    if (!currentProject) {
        return notFound();
    }
    return <SomeProjectPage currentProject={currentProject} />;
}
