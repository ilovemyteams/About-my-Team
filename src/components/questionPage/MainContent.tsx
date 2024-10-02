import React from "react";

import type { LongAnswerListType } from "@/src/mockedData/questionsData";

import { Section } from "../shared/Section";
import { ListContent } from "./ListContent";
import { TableContent } from "./TableContent";

interface MainContentProps {
    layout: number;
    content: LongAnswerListType[];
}

export const MainContent = ({ layout, content }: MainContentProps) => {
    return (
        //ToDo:can't change mb to 32px on section component
        <Section className=" mb-8 tab:mb-[100px] pb-[0px] tab:pb-[0px] pc:pb-[0px] deskxl:pb-[0px]">
            {layout === 1 && <ListContent content={content} />}
            {layout === 2 && <TableContent />}
            {layout === 3 && (
                <ListContent content={content} activeSubList={true} />
            )}
        </Section>
    );
};
