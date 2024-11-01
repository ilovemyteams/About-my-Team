import { Fragment } from "react";

import type { LongAnswerListType } from "@/src/mockedData/questionsData";

import { PageSection } from "../shared/PageSection";
import { DescriptionListContent } from "./DescriptionListContent/DescriptionListContent";
import { NumberedListContent } from "./NumberedListContent/NumberedListContent";
import { TableContent } from "./TableContent/TableContent";

interface MainContentProps {
    content: LongAnswerListType[];
    searchTerm: string;
}

export const MainContent = ({ content, searchTerm }: MainContentProps) => {
    return (
        <PageSection className="pb-[32px] tab:pb-[100px] flex flex-col gap-[80px] pc:gap-[100px]">
            {content.map((item, index) => (
                <Fragment key={index}>
                    {item.layout === 1 && (
                        <NumberedListContent
                            content={item.data}
                            title={item.title}
                            searchTerm={searchTerm}
                        />
                    )}
                    {item.layout === 2 && (
                        <TableContent
                            content={item.data}
                            title={item.title}
                            searchTerm={searchTerm}
                        />
                    )}
                    {item.layout === 3 && (
                        <DescriptionListContent
                            content={item.data}
                            title={item.title}
                            searchTerm={searchTerm}
                        />
                    )}
                </Fragment>
            ))}
        </PageSection>
    );
};
