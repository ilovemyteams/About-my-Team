import type { DescriptionType } from "@/src/mockedData/servicesData";

import { IconCheckmarkWithinSquare } from "../../shared/Icons/IconCheckmarkWithinSquare";
import { LayoutSubtitle } from "../shared/LayoutSubtitle";
import { LayoutText } from "../shared/LayoutText";

interface GridWithCheckmarkIconsItemProps {
    content: DescriptionType;
    className?: string;
}

export const GridWithCheckmarkIconsItem = ({
    content,
    className,
}: GridWithCheckmarkIconsItemProps) => {
    const { title, text: paragraph } = content;
    return (
        <li className={className}>
            <IconCheckmarkWithinSquare className="mb-2 text-redLight dark:text-red" />
            <hr className="mb-8 border-purple-strokeLight dark:border-purple-stroke" />
            {title && (
                <LayoutSubtitle text={title} className="mb-6 pc:text-2xlb" />
            )}
            <LayoutText text={paragraph} />
        </li>
    );
};
