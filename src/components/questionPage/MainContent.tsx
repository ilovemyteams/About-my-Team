import React from "react";

import type { LongAnswerListType } from "@/src/mockedData/questionsData";

import { Section } from "../shared/Section";
import { ListContent } from "./ListContent";
import { TableContent } from "./TableContent/TableContent";

interface MainContentProps {
    layout: number;
    content: LongAnswerListType[];
}

export const MainContent = ({ layout, content }: MainContentProps) => {
    return (
        //ToDo:can't change mb to 32px on section component
        <Section className=" mb-[0px]  pb-[32px] tab:pb-[100px] pc:mb-[0px] pc:pb-[100px] deskxl:pb-[0px]">
            {layout === 1 && <ListContent content={content} />}
            {layout === 2 && <TableContent content={content} />}
            {layout === 3 && (
                <ListContent content={content} activeSubList={true} />
            )}
        </Section>
    );
};
