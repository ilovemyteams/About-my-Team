"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { HighlightTitleFromMessages } from "@/src/components/shared/HighlightTitleFromMessages";
import { TasksSectionDataType } from "@/src/mockedData/portfolioData";

import { TasksSectionSlide } from "./TasksSectionSlide";
import { TasksSectionTabs } from "./TasksSectionTabs";

interface TasksSectionMobileProps {
    data: TasksSectionDataType[];
}

export const TasksSectionMobile = ({ data }: TasksSectionMobileProps) => {
    const [activeTab, setActiveTab] = useState(data[0].title);
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress, scrollY } = useScroll({ target: targetRef });
    const titles = data.map(item => item.title);
    const scrollStopPercent = `-${(titles.length - 1) * 100 + 5 * (titles.length - 1)}%`;

    const x = useTransform(scrollYProgress, [0, 1], ["1%", scrollStopPercent]);

    useEffect(() => {
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }

        return () => {
            history.scrollRestoration = "auto";
        };
    }, []);

    const onChangeActiveSlide = (title: string) => {
        setActiveTab(title);

        const index = titles.indexOf(title);
        if (targetRef.current) {
            const container = targetRef.current;
            const containerRect = container.getBoundingClientRect();
            const containerTop = window.scrollY + containerRect.top;

            const slideHeight = container.offsetHeight / data.length;

            // Центр активного слайду у межах container
            const activeSlideCenter = slideHeight * index + slideHeight / 2;

            // Центр в'юпорту
            const viewportCenter = window.innerHeight / 2;

            // Обчислюємо нову scroll позицію
            const targetScrollY =
                containerTop + activeSlideCenter - viewportCenter;

            if (index === 0 && scrollY.get() < targetScrollY) {
                return;
            }

            if (index === data.length - 1 && scrollY.get() > targetScrollY) {
                return;
            }

            window.requestAnimationFrame(() => {
                window.scrollTo({
                    top: targetScrollY,
                    behavior: "smooth",
                });
            });
        }
    };

    return (
        <div
            className="overflow-x-clip tab:hidden"
            ref={targetRef}
            style={{
                height: `${titles.length * 100}lvh`,
            }}
        >
            <div className="sticky top-[90px] max-h-[calc(100lvh_-_90px)] h-[calc(100lvh_-_100px)] flex flex-col gap-4">
                <HighlightTitleFromMessages
                    title="SomeProjectPage"
                    text="taskTitle"
                    className="mb-2 tab:mb-10 pc:mb-[64px]"
                />
                <TasksSectionTabs tabs={titles} activeTab={activeTab} />

                <div className="grow shrink">
                    <motion.ul
                        className="flex flex-nowrap gap-4 h-full"
                        style={{ x }}
                    >
                        {data.map((item, index) => (
                            <li key={index} className="shrink-0  w-full h-full">
                                <TasksSectionSlide
                                    key={index}
                                    item={item}
                                    onChangeActiveSlide={onChangeActiveSlide}
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
