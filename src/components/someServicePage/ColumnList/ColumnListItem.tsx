import { DescriptionType } from "@/src/mockedData/servicesData";

import { LayoutSubtitle } from "../shared/LayoutSubtitle";
import { LayoutText } from "../shared/LayoutText";
import { AnimatedColumnList } from "./AnimatedColumnList";

interface ColumnListItemProps {
    content: DescriptionType;
}

export const ColumnListItem = ({ content }: ColumnListItemProps) => {
    const { title, text } = content;

    return (
        <AnimatedColumnList>
            {title && (
                <LayoutSubtitle text={title} className="pc:text-2xlb pc:mb-4" />
            )}
            <LayoutText text={text} />
        </AnimatedColumnList>
    );
};
