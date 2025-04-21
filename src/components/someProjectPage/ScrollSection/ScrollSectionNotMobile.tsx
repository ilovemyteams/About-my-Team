"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { ScrollSectionDataType } from "@/src/mockedData/portfolioData";

import { ScrollSectionSlide } from "./ScrollSectionSlide";
import { ScrollSectionTabs } from "./ScrollSectionTabs";

interface ScrollSectionNotMobileProps {
    data: ScrollSectionDataType[];
}

export const ScrollSectionNotMobile = ({
    data,
}: ScrollSectionNotMobileProps) => {
    const [isActive, setIsActive] = useState(data[0].title);
    const titles = data.map(item => item.title);

    const onChangeActiveSlide = (title: string) => {
        setIsActive(title);
    };
    return (
        <div className="hidden pb-[40px] tab:block ">
            <div className="flex flex-col tab:gap-10 ">
                <ScrollSectionTabs tabs={titles} isActive={isActive} />

                <div className="tab:overflow-scroll">
                    <motion.ul className="flex flex-nowrap gap-4 h-full">
                        {data.map((item, index) => (
                            <ScrollSectionSlide
                                key={index}
                                item={item}
                                onChangeActiveSlide={onChangeActiveSlide}
                            />
                        ))}
                    </motion.ul>
                </div>
            </div>
        </div>
    );
};
