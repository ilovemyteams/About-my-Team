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
    const [activeTab, setActiveTab] = useState(data[0].title);
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress, scrollY } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-210%"]);

    const titles = data.map(item => item.title);

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
            console.log(scrollY.get(), targetScrollY, index);

            if (index === 0 && scrollY.get() < targetScrollY) {
                return;
            }

            if (index === data.length - 1 && scrollY.get() > targetScrollY) {
                return;
            }

            // Доскролюємо
            window.scrollTo({
                top: targetScrollY,
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            className="h-[300vh] overflow-x-clip pb-[40px] tab:hidden"
            ref={targetRef}
        >
            <div className="sticky top-[90px] max-h-[calc(100vh_-_90px)] h-[calc(100vh_-_100px)] flex flex-col gap-4">
                <ScrollSectionTabs tabs={titles} activeTab={activeTab} />

                <div className="grow shrink">
                    <motion.ul
                        className="flex flex-nowrap gap-4 h-full"
                        style={{ x }}
                    >
                        {data.map((item, index) => (
                            <li key={index} className="shrink-0  w-full h-full">
                                <ScrollSectionSlide
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
