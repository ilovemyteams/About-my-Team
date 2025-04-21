import { ScrollSectionType } from "@/src/mockedData/portfolioData";

import { PageSection } from "../../shared/PageSection";
import { ScrollSectionMobile } from "./ScrollSectionMobile";
import { ScrollSectionTitle } from "./ScrollSectionTitle";

export const ScrollSection = ({ content }: { content: ScrollSectionType }) => {
    const { data, title } = content;

    return (
        <PageSection className="pb-[80px]">
            <ScrollSectionTitle text={title} />
            <ScrollSectionMobile data={data} />
        </PageSection>
    );
};
