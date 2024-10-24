import React from "react";

import type { LongAnswerListType } from "@/src/mockedData/questionsData";
import { LocaleType } from "@/types/LocaleType";

import { PageSection } from "../shared/PageSection";
import { ListContent } from "./ListContent/ListContent";
import { TableContent } from "./TableContent/TableContent";

interface MainContentProps {
    layout: number;
    content: LongAnswerListType[];
    locale: LocaleType;
    searchTerm: string;
}

export const MainContent = ({
    layout,
    content,
    locale,
    searchTerm,
}: MainContentProps) => {
    return (
        <PageSection className="pb-[32px] tab:pb-[100px]">
            {layout === 1 && (
                <ListContent
                    content={content}
                    locale={locale}
                    searchTerm={searchTerm}
                />
            )}
            {layout === 2 && (
                <TableContent content={content} searchTerm={searchTerm} />
            )}
            {layout === 3 && (
                <ListContent
                    content={content}
                    activeSubList={true}
                    locale={locale}
                    searchTerm={searchTerm}
                />
            )}
        </PageSection>
    );
};
