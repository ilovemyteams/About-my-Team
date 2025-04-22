import { useTranslations } from "next-intl";

import { ScrollSectionDataType } from "@/src/mockedData/portfolioData";

import { HighlightTitleFromMockedData } from "../../shared/HighlightTitleFromMockedData";
import { PageSection } from "../../shared/PageSection";
import { ScrollSectionMobile } from "./ScrollSectionMobile";
import { ScrollSectionNotMobile } from "./ScrollSectionNotMobile";

export const ScrollSection = ({ data }: { data: ScrollSectionDataType[] }) => {
    const getTranslation = useTranslations("SomeProjectPage");
    const title = getTranslation("taskTitle");
    return (
        <PageSection className="pb-[80px] tab:pb-[100px] desk:pb-[120px]">
            <HighlightTitleFromMockedData text={title} />
            <ScrollSectionMobile data={data} />
            <ScrollSectionNotMobile data={data} />
        </PageSection>
    );
};
