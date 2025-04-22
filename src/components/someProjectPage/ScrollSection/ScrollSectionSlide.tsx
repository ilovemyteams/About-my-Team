"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import { IconCheck } from "@/src/components/shared/Icons/IconCheck";
import { ScrollSectionDataType } from "@/src/mockedData/portfolioData";
import { defineTaskIcon } from "@/src/utils/defineTaskIcon";

interface ScrollSectionSlideProps {
    item: ScrollSectionDataType;
    onChangeActiveSlide?: (title: string) => void;
}

export const ScrollSectionSlide = ({
    item,
    onChangeActiveSlide,
}: ScrollSectionSlideProps) => {
    const Icon = defineTaskIcon(item.icon);
    const slideRef = useRef(null);
    const isInView = useInView(slideRef, { amount: 0.5 });

    useEffect(() => {
        if (isInView && onChangeActiveSlide) {
            onChangeActiveSlide(item.title);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);

    return (
        <div
            className="min-w-full h-full pb-5 flex flex-col gap-4 tab:flex-row tab:gap-0 tab:pb-0"
            ref={slideRef}
        >
            <div className="grow relative tab:w-1/2">
                <div className="absolute inset-0  ">
                    <Icon className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full  text-redLight dark:text-red " />
                </div>
            </div>

            <ul className="flex flex-col gap-3 tab:gap-4 tab:w-1/2 tab:shrink-0 tab:justify-evenly pc:pt-[112px] pc:gap-5">
                {item.text.map((text, index) => (
                    <li key={index} className="flex gap-3">
                        <IconCheck className="shrink-0 size-[16px] pc:size-[24px] text-purple-130  dark:text-disabledLight" />
                        <span className="grow text-sm20 tab:text-base pc:text-xl28 desk:text-2xl34">
                            {text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
