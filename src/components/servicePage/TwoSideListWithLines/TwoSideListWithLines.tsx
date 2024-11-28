import React from "react";

import { ServiceContentType } from "@/src/mockedData/servicesData";

import { PageSection } from "../../shared/PageSection";
import { LayoutTitle } from "../shared/LayoutTitle";
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
            <LayoutTitle text={title} />

            <ul className="pc:pb-[60px]">
                {description.map((desc, index) => (
                    <TwoSideListItem key={index} content={desc} />
                ))}
            </ul>
        </PageSection>
    );
};
