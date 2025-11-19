import { Fragment } from "react";

import { CurrentFaqQueryResult } from "@/sanity/types";

import { PageSection } from "../shared/PageSection";
import { ArrowedBlockContent } from "./ArrowedBlockContent/ArrowedBlockContent";
import { ColumnListFAQ } from "./ColumnListFAQ/ColumnListFAQ";
import { DescriptionListContent } from "./DescriptionListContent/DescriptionListContent";
import { MarkedListContent } from "./MarkedListContent/MarkedListContent";
import { MarkedListWithTitle } from "./MarkedListWithTitle/MarkedListWithTitle";
import { NumberedListContent } from "./NumberedListContent/NumberedListContent";
import { TableContent } from "./TableContent/TableContent";

interface MainContentProps {
    content: NonNullable<NonNullable<CurrentFaqQueryResult>["mainContent"]>;
    searchTerm: string;
}

export const MainContent = ({ content, searchTerm }: MainContentProps) => {
    return (
        <PageSection className="pb-[32px] tab:pb-[100px] flex flex-col gap-[80px] pc:gap-[100px] text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34">
            {content.map(
                (
                    {
                        mainContentTitle,
                        mainContentTopText,
                        layoutType,
                        mainContentText,
                        decoration,
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
                                decoration={decoration}
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

                        {layoutType === "redBulletTextWithArrow" && (
                            <MarkedListWithTitle
                                content={mainContentText}
                                title={mainContentTitle}
                                searchTerm={searchTerm}
                                topText={mainContentTopText}
                            />
                        )}
                        {layoutType === "gorizontalList" && (
                            <ColumnListFAQ
                                content={mainContentText}
                                title={mainContentTitle}
                                searchTerm={searchTerm}
                                topText={mainContentTopText}
                            />
                        )}
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

//
