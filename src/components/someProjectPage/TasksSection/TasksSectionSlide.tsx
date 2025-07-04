"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";

import { IconCheck } from "@/src/components/shared/Icons/IconCheck";
import { SCREEN_NAMES } from "@/src/constants/screenNames";
import { useScreenSize } from "@/src/hooks/useScreenSize";
import { TasksSectionDataType } from "@/src/mockedData/portfolioData";
import { defineTaskIcon } from "@/src/utils/defineTaskIcon";

interface TasksSectionSlideProps {
    item: TasksSectionDataType;
    onChangeActiveSlide?: (title: string) => void;
    activeTab: string;
}

export const TasksSectionSlide = ({
    item,
    onChangeActiveSlide,
    activeTab,
}: TasksSectionSlideProps) => {
    const Icon = defineTaskIcon(item.icon);
    const screenSize = useScreenSize();
    const slideRef = useRef(null);
    const isInView = useInView(slideRef, { amount: 0.5 });
    const isActiveSlide = useMemo(
        () => activeTab === item.title,
        [activeTab, item.title]
    );

    const isMobile = useMemo(
        () => screenSize === SCREEN_NAMES.mobileName,
        [screenSize]
    );

    useEffect(() => {
        if (isInView && onChangeActiveSlide) {
            onChangeActiveSlide(item.title);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);

    const iconVariants = {
        enter: {
            x: 0,

            transition: { duration: 0.5, delay: isMobile ? 0 : 0.6 },
        },
        exit: {
            x: isMobile ? 0 : "-100%",

            transition: { duration: 0.5 },
        },
    };

    const slideVariants = {
        enter: {
            y: 0,
            transition: { duration: 0.5, delay: isMobile ? 0 : 0.6 },
        },
        exit: {
            y: isMobile ? 0 : "150%",
            transition: { duration: 0.5 },
        },
    };

    return (
        <div
            className="min-w-full h-full pb-[60px] flex gap-4 tab:flex-row tab:gap-0 tab:pb-0"
            ref={slideRef}
        >
            <div className=" hidden tab:block grow relative tab:w-1/2 overflow-clip">
                <motion.div
                    className="absolute inset-0 "
                    variants={iconVariants}
                    initial="enter"
                    animate={isActiveSlide ? "enter" : "exit"}
                >
                    <Icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  w-[85%] h-[85%] max-w-[300px] max-h-[250px]   text-redLight dark:text-red " />
                </motion.div>
            </div>

            <div className="overflow-clip w-[calc(100%_-_16px)] mx-auto tab:w-1/2 pc:w-[53%] desk:w-1/2 tab:shrink-0">
                <motion.ul
                    className="flex flex-col gap-3 justify-center tab:h-full tab:gap-4 tab:justify-evenly pc:pt-[112px] pc:gap-5 text-pretty "
                    variants={slideVariants}
                    initial="enter"
                    animate={isActiveSlide ? "enter" : "exit"}
                >
                    {item.text.map((text, index) => (
                        <li key={index} className="flex gap-3">
                            <IconCheck className="shrink-0 size-[16px] pc:size-[24px] text-purple-130  dark:text-disabledLight" />
                            <span className="grow text-base pc:text-xl28 desk:text-2xl34">
                                {text}
                            </span>
                        </li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
};
