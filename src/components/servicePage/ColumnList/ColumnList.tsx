import { ServiceContentType } from "@/src/mockedData/servicesData";

import { PageSection } from "../../shared/PageSection";
import { LayoutTitle } from "../shared/LayoutTitle";
import { ColumnListItem } from "./ColumnListItem";

interface ColumnListProps {
    content: ServiceContentType;
}

export const ColumnList = ({ content }: ColumnListProps) => {
    const { title, description } = content;
    return (
        <PageSection className="mb-[80px] tab:mb-[100px] desk:mb-[120px]">
            <LayoutTitle text={title} />
            <ul className="tab:grid tab:grid-cols-[31%_38%_31%]">
                {description.map((item, index) => (
                    <ColumnListItem content={item} key={index} />
                ))}
            </ul>
        </PageSection>
    );
};
