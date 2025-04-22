"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

import { ScrollSectionDataType } from "@/src/mockedData/portfolioData";

import { ScrollSectionSlide } from "./ScrollSectionSlide";
import { ScrollSectionTabs } from "./ScrollSectionTabs";

interface ScrollSectionNotMobileProps {
    data: ScrollSectionDataType[];
}

export const ScrollSectionNotMobile = ({
    data,
}: ScrollSectionNotMobileProps) => {
    const [activeTab, setActiveTab] = useState(data[0].title);

    const titles = data.map(item => item.title);
    const slideRefs = useRef<Record<string, HTMLLIElement | null>>({});

    const onClickTab = (title: string) => {
        setActiveTab(title);
        const slideRef = slideRefs.current[title];

        if (slideRef) {
            setTimeout(() => {
                slideRef.scrollIntoView({
                    inline: "start",
                    block: "nearest",
                });
            }, 500);
        }
    };

    return (
        <div className="hidden tab:pb-[52px] tab:block pc:relative pc:pb-[60px]">
            <div className="flex flex-col tab:gap-10 ">
                <ScrollSectionTabs
                    tabs={titles}
                    activeTab={activeTab}
                    onClickTab={onClickTab}
                />

                <div className="tab:overflow-hidden">
                    <motion.ul className="flex flex-nowrap gap-4">
                        {data.map((item, index) => (
                            <li
                                key={index}
                                ref={el => {
                                    slideRefs.current[item.title] = el;
                                }}
                                className="min-w-full"
                            >
                                <ScrollSectionSlide
                                    item={item}
                                    activeTab={activeTab}
                                />
                            </li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </div>
    );
};
