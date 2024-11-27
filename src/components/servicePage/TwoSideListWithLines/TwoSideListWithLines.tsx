import React from "react";

import { ServiceContentType } from "@/src/mockedData/servicesData";

import { PageSection } from "../../shared/PageSection";
import { TwoSideListItem } from "./TwoSideListItem";

interface TwoSideListWithLinesProps {
    content: ServiceContentType;
}

export const TwoSideListWithLines = ({
    content,
}: TwoSideListWithLinesProps) => {
    const { description, title } = content;

    return (
        <PageSection className="mb-[80px] tab:mb-[100px] desk:mb-[120px]">
            <h2 className="font-caviar text-purple-200 dark:text-white-200 text-2xlb tab:text-4xl pc:text-5xl desk:text-6xl mb-10 tab:mb-[64px] pc:mb-[80px]">
                {title}
            </h2>
            <ul className="pc:pb-[60px]">
                {description.map((desc, index) => (
                    <TwoSideListItem key={index} content={desc} />
                ))}
            </ul>
        </PageSection>
    );
};
