"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import { ScrollSectionDataType } from "@/src/mockedData/portfolioData";

import { ScrollSectionSlide } from "./ScrollSectionSlide";
import { ScrollSectionTabs } from "./ScrollSectionTabs";

interface ScrollSectionMobileProps {
    data: ScrollSectionDataType[];
}

export const ScrollSectionMobile = ({ data }: ScrollSectionMobileProps) => {
    const [isActive, setIsActive] = useState(data[0].title);
    const targetrRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetrRef });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-210%"]);

    const titles = data.map(item => item.title);

    const onChangeActiveSlide = (title: string) => {
        setIsActive(title);
    };

    return (
        <div
            className="h-[300vh] overflow-x-clip pb-[40px] tab:hidden"
            ref={targetrRef}
        >
            <div className="sticky top-[90px] max-h-[calc(100dvh_-_90px)] h-[calc(100dvh_-_100px)] flex flex-col gap-4">
                <ScrollSectionTabs tabs={titles} isActive={isActive} />

                <div className="grow shrink ">
                    <motion.ul
                        className="flex flex-nowrap gap-4 h-full  "
                        style={{ x }}
                    >
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
