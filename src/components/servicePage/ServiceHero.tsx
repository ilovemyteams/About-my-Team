import Image from "next/image";

import { TopTextType } from "@/src/mockedData/servicesData";
import { defineServiceIcon } from "@/src/utils/defineServiceIcon";
import { HighlightPurple } from "@/src/utils/highlightingPurple";

import { PageSection } from "../shared/PageSection";

interface ServiceHeroProps {
    title: string;
    text: string;
    image: string;
    topText?: TopTextType[];
}

export const ServiceHero = ({
    title,
    text,
    image,
    topText,
}: ServiceHeroProps) => {
    return (
        <PageSection className="pb-[80px] tab:pb-[100px] pc:pb-[60px]">
            <h1 className="font-caviar text-3xl mb-6 tab:text-4xl tab:mb-[60px] pc:mb-[100px] desk:mb-[120px] pc:text-6xl desk:text-7xl">
                {HighlightPurple({ title })}
            </h1>
            <div className="tab:flex tab:flex-row-reverse tab:gap-5 pc:gap-[60px]">
                <Image
                    src={image}
                    alt={title}
                    width={638}
                    height={425}
                    className="mb-6 tab:w-[47.22%] pc:w-[41.67%] desk:w-[47.75%] tab:aspect-[340/227] tab:mb-0"
                />
                <div className="tab:w-[50%] pc:w-[52.78%] desk:w-[47.75%] text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 ">
                    <p className=" whitespace-pre-wrap">{text}</p>
                    {topText && (
                        <p className="flex flex-col mt-6 pc:mt-8 desk:mt-10 gap-4 pc:gap-6">
                            {topText.map((item, index) => {
                                const Icon = defineServiceIcon(item.icon);
                                return (
                                    <span key={index} className="flex gap-2">
                                        <span>
                                            <Icon className="w-[24px] pc:w-[32px] h-auto text-purple-130 dark:text-purple-100 mt-[-2px]" />
                                        </span>

                                        {item.text}
                                    </span>
                                );
                            })}
                        </p>
                    )}
                </div>
            </div>
        </PageSection>
    );
};
