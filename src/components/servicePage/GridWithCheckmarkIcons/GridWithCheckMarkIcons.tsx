import { ServiceContentType } from "@/src/mockedData/servicesData";

import { PageSection } from "../../shared/PageSection";
import { LayoutTitle } from "../shared/LayoutTitle";
import { GridWithCheckmarkIconsItem } from "./GridWithCheckMarkIconsItem";

interface GridWithCheckmarkIconsProps {
    content: ServiceContentType;
}

export const GridWithCheckmarkIcons = ({
    content,
}: GridWithCheckmarkIconsProps) => {
    const { description, title } = content;

    return (
        <PageSection className="mb-[80px] tab:mb-[100px] desk:mb-[120px]">
            <LayoutTitle text={title} />
            <ul className="grid grid-cols-1 gap-y-8 tab:grid-cols-2 tab:gap-x-[3.75rem] tab:gap-y-16 pc:gap-x-[7.5rem] pc:gap-y-20 desk:gap-x-64">
                {description.map((item, index) => (
                    <GridWithCheckmarkIconsItem
                        key={index}
                        content={item}
                        className={`w-full ${description.length % 2 !== 0 && "last:col-span-2 last:w-1/2 last:mx-auto"}`}
                    />
                ))}
            </ul>
        </PageSection>
    );
};
// className={`w-full tab:w-[45.8%] tab:mb-1 pc:w-[44.4%] ${description.length % 2 !== 0 && "last:mx-auto last:mb-0"}`}
{
    /* <ul className=" border flex flex-wrap gap-8 tab:gap-[60px] pc:gap-[120px]"> */
}
