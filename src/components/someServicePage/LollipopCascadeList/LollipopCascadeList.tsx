import { ServiceContentType } from "@/src/mockedData/servicesData";

import { PageSection } from "../../shared/PageSection";
import { LayoutTitle } from "../shared/LayoutTitle";
import { LollipopCascadeListItem } from "./LollipopCascadeListItem";

interface LollipopCascadeListProps {
    content: ServiceContentType;
}

export const LollipopCascadeList = ({ content }: LollipopCascadeListProps) => {
    const { title, description: items } = content;
    return (
        <PageSection className="mb-[80px] tab:mb-[100px] desk:mb-[120px]">
            <LayoutTitle text={title} />
            <ol className="flex flex-col gap-12 tab:gap-8 pc:gap-4">
                {items.map((item, index) => (
                    <LollipopCascadeListItem
                        key={index}
                        content={item}
                        index={index}
                    />
                ))}
            </ol>
        </PageSection>
    );
};
