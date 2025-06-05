import { HomeStagesQueryResult } from "@/types/sanity.types";

import { Section } from "../../shared/Section";
import { StagesTable } from "./StagesTable";
import { StagesTitle } from "./StagesTitle";

export const StagesSection = ({ data }: { data: HomeStagesQueryResult }) => {
    const { anchorId, stagesListText, stagesListTitle, subtitle, title } =
        data?.stagesHome || {};

    return (
        <Section id={anchorId || ""}>
            {subtitle && title && (
                <StagesTitle title={title} subtitle={subtitle} />
            )}
            <StagesTable
                stagesListText={stagesListText || []}
                stagesListTitle={stagesListTitle || []}
            />
        </Section>
    );
};
