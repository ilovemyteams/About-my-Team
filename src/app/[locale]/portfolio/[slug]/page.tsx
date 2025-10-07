import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";

import { SomeProjectPage } from "@/src/components/someProjectPage/SomeProjectPage";
import {
    portfolioData,
    PortfolioDataItemType,
} from "@/src/mockedData/portfolioData";
import { LocaleType } from "@/types/LocaleType";
import { RouteSlugParams } from "@/types/RoutesType";

interface ProjectPageProps {
    params: RouteSlugParams;
}

export async function generateMetadata({
    params,
}: ProjectPageProps): Promise<Metadata> {
    const locale = await getLocale();
    const { slug } = await params;
    const displayedProject: PortfolioDataItemType | undefined =
        portfolioData.find(project => project.data.slug === slug);

    if (!displayedProject) {
        return {
            title: "Project Not Found",
            description: "The requested project does not exist.",
        };
    }

    const localization = displayedProject[locale as LocaleType];
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

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const currentProject = portfolioData.find(item => item.data.slug === slug);

    if (!currentProject) {
        return notFound();
    }
    return <SomeProjectPage currentProject={currentProject} />;
}
