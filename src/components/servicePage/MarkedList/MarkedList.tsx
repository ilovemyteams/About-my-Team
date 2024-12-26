import { ServiceContentType } from "@/src/mockedData/servicesData";

import { IconCheck } from "../../shared/Icons/IconCheck";
import { PageSection } from "../../shared/PageSection";
import { LayoutTitle } from "../shared/LayoutTitle";

interface MarkedListProps {
    content: ServiceContentType;
}

export const MarkedList = ({ content }: MarkedListProps) => {
    const { title, description: items } = content;

    return (
        <PageSection>
            <LayoutTitle text={title} />

            <ul className="flex flex-col gap-5 tab:gap-6 desk:gap-10 w-full tab:w-[58%] pc:w-[56%] desk:w-[50%]">
                {items.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className="flex gap-2 pc:gap-3 items-start"
                        >
                            <div>
                                <IconCheck className="w-6 h-auto dark:text-red text-redLight" />
                            </div>
                            <div>
                                {item.title && (
                                    <h3 className="font-caviar text-lg tab:text-xlb pc:text-2xlb desk:text-4xl text-purple-200 dark:text-white-200">
                                        {item.title as string}
                                    </h3>
                                )}
                                <p className="max-w-full text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 text-greyLight dark:text-grey">
                                    {item.text as string}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </PageSection>
    );
};
