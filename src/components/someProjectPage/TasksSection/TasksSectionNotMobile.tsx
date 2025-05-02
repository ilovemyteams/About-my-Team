"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

import { HighlightTitleFromMessages } from "@/src/components/shared/HighlightTitleFromMessages";
import { TasksSectionDataType } from "@/src/mockedData/portfolioData";

import { TasksSectionSlide } from "./TasksSectionSlide";
import { TasksSectionTabs } from "./TasksSectionTabs";

interface TasksSectionNotMobileProps {
    data: TasksSectionDataType[];
}

export const TasksSectionNotMobile = ({ data }: TasksSectionNotMobileProps) => {
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
            <HighlightTitleFromMessages
                title="SomeProjectPage"
                text="taskTitle"
                className="mb-6 tab:mb-10 pc:mb-[64px]"
            />
            <div className="flex flex-col tab:gap-10 ">
                <TasksSectionTabs
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
                                <TasksSectionSlide
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
