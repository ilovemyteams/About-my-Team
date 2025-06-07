import { ServiceContentType } from "@/src/mockedData/servicesData";

import { IconCheck } from "../../shared/Icons/IconCheck";
import { IconQADecoration } from "../../shared/Icons/IconQADecoration";
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
            <div className="flex flex-col tab:flex-row gap-8 tab:gap-3 pc:gap-[29px] desk:gap-[123px] mb-20 tab:mb-[100px] desk:mb-[120px]">
                <ul className="flex flex-col gap-5 tab:gap-6 w-full tab:w-[75%] pc:w-[56%] desk:w-[59%] pc:mb-[60px]">
                    {items.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="flex gap-2 tab:gap-3 items-start"
                            >
                                <div>
                                    <IconCheck className="w-4 tab:w-6 h-auto dark:text-red text-redLight" />
                                </div>
                                <div>
                                    {item.title && (
                                        <h3 className="font-caviar text-lg tab:text-xlb pc:text-2xlb desk:text-3xl text-purple-200 dark:text-white-200">
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
                <div className="text-redLight dark:text-red mx-auto w-[76px] pc:w-[110px] desk:w-[159px]">
                    <IconQADecoration className="block tab:sticky tab:top-[15%]" />
                </div>
            </div>
        </PageSection>
    );
};
