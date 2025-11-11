import { Fragment } from "react";

import { CurrentFaqQueryResult } from "@/sanity/types";

import { PageSection } from "../shared/PageSection";
import { ArrowedBlockContent } from "./ArrowedBlockContent/ArrowedBlockContent";
import { DescriptionListContent } from "./DescriptionListContent/DescriptionListContent";
import { MarkedListContent } from "./MarkedListContent/MarkedListContent";
import { NumberedListContent } from "./NumberedListContent/NumberedListContent";
import { TableContent } from "./TableContent/TableContent";

interface MainContentProps {
    content: NonNullable<NonNullable<CurrentFaqQueryResult>["mainContent"]>;
    searchTerm: string;
}

export const MainContent = ({ content, searchTerm }: MainContentProps) => {
    return (
        <PageSection className="pb-[32px] tab:pb-[100px] flex flex-col gap-[80px] pc:gap-[100px]">
            {content.map(
                (
                    {
                        mainContentTitle,
                        mainContentTopText,
                        layoutType,
                        mainContentText,
                    },
                    index
                ) => (
                    <Fragment key={index}>
                        {layoutType === "numberedList" && (
                            <NumberedListContent
                                content={mainContentText}
                                title={mainContentTitle}
                                searchTerm={searchTerm}
                                topText={mainContentTopText}
                            />
                        )}
                        {layoutType === "table" && (
                            <TableContent
                                content={mainContentText}
                                title={mainContentTitle}
                                searchTerm={searchTerm}
                                topText={mainContentTopText}
                            />
                        )}
                        {layoutType === "list" && (
                            <DescriptionListContent
                                content={mainContentText}
                                title={mainContentTitle}
                                searchTerm={searchTerm}
                                topText={mainContentTopText}
                            />
                        )}
                        {layoutType === "decorationList" && (
                            <MarkedListContent
                                content={mainContentText}
                                title={mainContentTitle}
                                searchTerm={searchTerm}
                                topText={mainContentTopText}
                            />
                        )}

                        {layoutType === "textWithArrow" && (
                            <ArrowedBlockContent
                                content={mainContentText}
                                title={mainContentTitle}
                                searchTerm={searchTerm}
                                topText={mainContentTopText}
                            />
                        )}

                        {/* {item.layout === 6 && (
                            <MarkedListWithTitle
                                content={item}
                                searchTerm={searchTerm}
                            />
                        )} */}
                        {/* {item.layout === 7 && (
                            <ColumnListFAQ
                                content={item}
                                searchTerm={searchTerm}
                            />
                        )} */}
                        {/* {item.layout === 8 && (
                            <TwoSidesListWithLines
                                content={item}
                                searchTerm={searchTerm}
                            />
                        )} */}
                    </Fragment>
                )
            )}
        </PageSection>
    );
};
