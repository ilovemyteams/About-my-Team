import { useTranslations } from "next-intl";

import { PageSection } from "../shared/PageSection";
import { PageTopSection } from "../shared/PageTopSection";

interface ServiceHeaderProps {
    name: string;
}

export const ServiceHeader = ({ name }: ServiceHeaderProps) => {
    const getTranslation = useTranslations("Breadcrumbs");

    const breadcrumbs = [
        { title: getTranslation("breadcrumbItemServices"), url: "services" },
        { title: name, url: "" },
    ];
    return (
        <PageSection className="pt-4 tab:pt-[44px] pc:pt-8">
            <PageTopSection breadcrumbsList={breadcrumbs} />
        </PageSection>
    );
};
