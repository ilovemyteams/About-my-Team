import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

import { Service } from "@/src/components/servicePage/Service";
import { servicesData, ServiceType } from "@/src/mockedData/servicesData";
import { LocaleType } from "@/types/LocaleType";
import {
    allProjectsData,
    ProjectDataItemType,
} from "@/src/mockedData/allProjectsData";
import { SomeProjectPage } from "@/src/components/projectPage/SomeProjectPage";

interface ProjectPageProps {
    params: {
        slug: string;
        locale: string;
    };
}

export async function generateMetadata({
    params,
}: ProjectPageProps): Promise<Metadata> {
    const displayedProject: ProjectDataItemType | undefined =
        allProjectsData.find(project => project.data.slug === params.slug);

    if (!displayedProject) {
        return {
            title: "Project Not Found",
            description: "The requested project does not exist.",
        };
    }

    const localization = displayedProject[params.locale as LocaleType];
    const normalizedTitle =
        localization.title[0].toUpperCase() + localization.title.slice(1);

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
    const currentProject = allProjectsData.find(
        item => item.data.slug === params.slug
    );

    if (!currentProject) {
        return notFound();
    }
    return <SomeProjectPage currentProject={currentProject} />;
}
