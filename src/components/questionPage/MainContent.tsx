import { Fragment } from "react";

import type { LongAnswerListType } from "@/src/mockedData/questionsData";
import { LocaleType } from "@/types/LocaleType";

import { PageSection } from "../shared/PageSection";
import { ListContent } from "./ListContent/ListContent";
import { TableContent } from "./TableContent/TableContent";

interface MainContentProps {
    content: LongAnswerListType[];
    locale: LocaleType;
    searchTerm: string;
}

export const MainContent = ({
    content,
    locale,
    searchTerm,
}: MainContentProps) => {
    return (
        <PageSection className="pb-[32px] tab:pb-[100px]">
            {content.map((item, index) => (
                <Fragment key={index}>
                    {item.layout === 1 && (
                        <ListContent
                            content={item.data}
                            title={item.title}
                            locale={locale}
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
                </Fragment>
            ))}
        </PageSection>
    );
};
