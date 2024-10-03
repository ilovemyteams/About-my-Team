import React from "react";

import type { LongAnswerListType } from "@/src/mockedData/questionsData";

import { PageSection } from "../shared/PageSection";
import { ListContent } from "./ListContent/ListContent";
import { TableContent } from "./TableContent/TableContent";

interface MainContentProps {
    layout: number;
    content: LongAnswerListType[];
}

export const MainContent = ({ layout, content }: MainContentProps) => {
    return (
        <PageSection className="pb-[32px] tab:pb-[100px]">
            {layout === 1 && <ListContent content={content} />}
            {layout === 2 && <TableContent content={content} />}
            {layout === 3 && (
                <ListContent content={content} activeSubList={true} />
            )}
        </PageSection>
    );
};
