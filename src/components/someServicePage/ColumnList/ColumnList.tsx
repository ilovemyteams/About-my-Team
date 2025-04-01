import { ServiceContentType } from "@/src/mockedData/servicesData";

import { PageSection } from "../../shared/PageSection";
import { LayoutTitle } from "../shared/LayoutTitle";
import { ColumnListItem } from "./ColumnListItem";

interface ColumnListProps {
    content: ServiceContentType;
}

export const ColumnList = ({ content }: ColumnListProps) => {
    const { title, description } = content;
    const isExtraPaddingNeeded =
        description.length > 3 && "tab:mb-[75px] pc:mb-[32px] desk:mb-0";

    return (
        <PageSection className="mb-[80px] tab:mb-[100px] desk:mb-[120px]">
            <LayoutTitle text={title} />
            <ul
                className={`${isExtraPaddingNeeded} tab:grid tab:gap-y-[42px] pc:gap-y-20 tab:grid-cols-[33%_34%_33%]`}
            >
                {description.map((item, index) => (
                    <ColumnListItem content={item} key={index} />
                ))}
            </ul>
        </PageSection>
    );
};
