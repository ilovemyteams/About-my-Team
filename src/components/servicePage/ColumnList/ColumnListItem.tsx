import { DescriptionType } from "@/src/mockedData/servicesData";

import { LayoutSubtitle } from "../shared/LayoutSubtitle";
import { LayoutText } from "../shared/LayoutText";

interface ColumnListItemProps {
    content: DescriptionType;
}

export const ColumnListItem = ({ content }: ColumnListItemProps) => {
    const { title, text } = content;
    return (
        <li className="py-6 tab:py-0 tab:px-5 pc:px-[50px] last:pb-0 tab:last:pr-0 first:pt-0 tab:first:pl-0 border-b-[1px] tab:border-r-[1px] tab:border-b-0 border-redLight last:border-none dark:border-red">
            {title && (
                <LayoutSubtitle text={title} className="pc:text-2xlb pc:mb-4" />
            )}
            <LayoutText text={text} />
        </li>
    );
};
