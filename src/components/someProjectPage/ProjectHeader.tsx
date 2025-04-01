import { useTranslations } from "next-intl";

import { PageSection } from "../shared/PageSection";
import { PageTopSection } from "../shared/PageTopSection";

interface ProjectHeaderProps {
    title: string;
}

export const ProjectHeader = ({ title }: ProjectHeaderProps) => {
    const getTranslation = useTranslations("Breadcrumbs");

    const breadcrumbs = [
        { title: getTranslation("breadcrumbItemPortfolio"), url: "portfolio" },
        { title: title, url: "" },
    ];
    return (
        <PageSection className="pt-4 tab:pt-[44px] pc:pt-8">
            <PageTopSection breadcrumbsList={breadcrumbs} />
        </PageSection>
    );
};
