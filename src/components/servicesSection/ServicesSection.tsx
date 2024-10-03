import { HomeServicesQueryResult } from "@/types/sanity.types";

import { Section } from "../shared/Section";
import { ServicesTable } from "./ServicesTable";
import { Title } from "./Title";

export const ServicesSection = ({
    data,
}: {
    data: HomeServicesQueryResult;
}) => {
    const {
        title: servicesTitle,
        subtitle: servicesSubtitle,
        anchorId,
        description,
        servicesListText,
        servicesListTitle,
    } = data?.servicesHome || {};

    return (
        <Section id={anchorId || ""}>
            {servicesTitle && servicesSubtitle && (
                <Title title={servicesTitle} subtitle={servicesSubtitle} />
            )}
            <ServicesTable
                description={description || ""}
                servicesListText={servicesListText || []}
                servicesListTitle={servicesListTitle || []}
            />
        </Section>
    );
};
