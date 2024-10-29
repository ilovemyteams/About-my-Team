import { Fragment } from "react";

import type { LongAnswerListType } from "@/src/mockedData/questionsData";

import { PageSection } from "../shared/PageSection";
import { ListContent } from "./ListContent/ListContent";
import { SpecificationContent } from "./SpecificationContent/SpecificationContent";
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
                        <ListContent
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
                        <SpecificationContent
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
