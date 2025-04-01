import type { DescriptionType } from "@/src/mockedData/servicesData";

import { LayoutSubtitle } from "../shared/LayoutSubtitle";
import { LayoutText } from "../shared/LayoutText";
import { GridAnimatedWithCheckMark } from "./GridAnimatedWithCheckMark";

interface GridWithCheckmarkIconsItemProps {
    content: DescriptionType;
    index: number;
    className?: string;
}

export const GridWithCheckmarkIconsItem = ({
    content,
    index,
    className,
}: GridWithCheckmarkIconsItemProps) => {
    const { title, text } = content;
    return (
        <GridAnimatedWithCheckMark className={className} index={index}>
            {title && (
                <LayoutSubtitle text={title} className="mb-6 pc:text-2xlb" />
            )}
            <LayoutText text={text} />
        </GridAnimatedWithCheckMark>
    );
};
