import { DescriptionType } from "@/src/mockedData/servicesData";

import { LayoutSubtitle } from "../shared/LayoutSubtitle";
import { LayoutText } from "../shared/LayoutText";

interface ColumnListItemProps {
    content: DescriptionType;
}

export const ColumnListItem = ({ content }: ColumnListItemProps) => {
    const { title, text } = content;

    return (
        <li
            className={`relative py-6 tab:py-0 tab:px-5 pc:px-[50px] last:pb-0 tab:last:pr-0 first:pt-0 [&:nth-child(3n-2)]:tab:pl-0 border-b-[1px] tab:border-r-[1px] tab:border-b-0 border-redLight dark:border-red tab:[&:nth-child(3n)]:border-none last:border-none tab:after:absolute after:w-[101%] after:h-[1px] after:bg-redLight after:dark:bg-red after:-top-[21px] pc:after:-top-10 after:left-0 [&:nth-child(-n+3)]:after:hidden`}
        >
            {title && (
                <LayoutSubtitle text={title} className="pc:text-2xlb pc:mb-4" />
            )}
            <LayoutText text={text} />
        </li>
    );
};
