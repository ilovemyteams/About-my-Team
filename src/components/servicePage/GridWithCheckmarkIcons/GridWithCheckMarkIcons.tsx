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
        <PageSection className="pb-[80px] tab:pb-[100px] desk:pb-[120px]">
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
