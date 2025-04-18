import { ScrollSectionType } from "@/src/mockedData/portfolioData";

import { HighlightTitleFromMockedData } from "../../shared/HighlightTitleFromMockedData";
import { PageSection } from "../../shared/PageSection";
import { ScrollSectionMobile } from "./ScrollSectionMobile";

export const ScrollSection = ({ content }: { content: ScrollSectionType }) => {
    const { data, title } = content;

    return (
        <PageSection className="pb-[80px]">
            <HighlightTitleFromMockedData text={title} />
            <ScrollSectionMobile data={data} />
        </PageSection>
    );
};
