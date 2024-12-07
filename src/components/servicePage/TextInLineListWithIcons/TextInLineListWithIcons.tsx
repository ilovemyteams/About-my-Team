import React from "react";

import { ServiceContentType } from "@/src/mockedData/servicesData";

import { PageSection } from "../../shared/PageSection";
import { LayoutTitle } from "../shared/LayoutTitle";
import { TextInLineListItem } from "./TextInLineListItem";

interface TextInLineListWithIconsProps {
    content: ServiceContentType;
}

export const TextInLineListWithIcons = ({
    content,
}: TextInLineListWithIconsProps) => {
    const { title, description } = content;
    return (
        <PageSection className="mb-[80px] tab:mb-[100px] desk:mb-[120px]">
            <LayoutTitle text={title} />
            <ul className="grid gap-6 tab:gap-10 pc:gap-5 pc:pb-[60px]">
                {description.map((item, index) => (
                    <TextInLineListItem content={item} key={index} />
                ))}
            </ul>
        </PageSection>
    );
};
