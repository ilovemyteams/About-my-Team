"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { ScrollSectionType } from "@/src/mockedData/portfolioData";
import { defineTaskIcon } from "@/src/utils/defineTaskIcon";
import { highlightPurple } from "@/src/utils/highlightingPurple";

import { IconCheck } from "../../shared/Icons/IconCheck";
import { PageSection } from "../../shared/PageSection";

export const ScrollSection = ({ content }: { content: ScrollSectionType }) => {
    const targetrRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetrRef });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-210%"]);
    const { data, title } = content;
    const highlightedTitle = highlightPurple(title);
    const titles = data.map(item => item.title);
    const isActive = "Унікальність";

    return (
        <PageSection className="pb-[80px]">
            <h2 className="font-caviar font-bold text-2xl24 mb-6">
                {highlightedTitle.map((part, index) => {
                    if (part.decoration === "purple") {
                        return (
                            <span key={index} className="text-purple-100">
                                {part.text}
                            </span>
                        );
                    }
                    return <span key={index}>{part.text}</span>;
                })}
            </h2>
            <div
                className="h-[300vh] overflow-x-clip pb-[40px]"
                ref={targetrRef}
            >
                <div className="sticky top-[90px] max-h-[calc(100dvh_-_90px)] h-[calc(100dvh_-_100px)] flex flex-col gap-4">
                    <ul className="flex flex-wrap gap-2">
                        {titles.map((title, index) => {
                            const color =
                                isActive === title
                                    ? "text-lightRed dark:text-red bg-memberMenuGradientLight dark:bg-memberMenuGradientDark"
                                    : "text-disabledLight";

                            return (
                                <li
                                    key={index}
                                    className={`p-2 font-bold border-[1px] border-purple-stroke text-sm ${color}`}
                                >
                                    <span>{title}</span>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="shrink grow">
                        <motion.ul
                            className="flex flex-nowrap gap-4 h-full"
                            style={{ x }}
                        >
                            {data.map((item, index) => {
                                const Icon = defineTaskIcon(item.icon);
                                return (
                                    <li
                                        key={index}
                                        className="min-w-full h-full grid grid-rows-[1fr,auto] pb-5"
                                    >
                                        <div className="flex items-center justify-center">
                                            <Icon className="max-w-[216px] w-full h-auto text-redLight dark:text-red mb-4 mx-auto" />
                                        </div>

                                        <ul className="flex flex-col gap-3 shrink-0">
                                            {item.text.map((text, index) => (
                                                <li
                                                    key={index}
                                                    className="flex gap-3"
                                                >
                                                    <IconCheck className="size-[16px] shrink-0 text-disabledLight" />
                                                    <span className="grow text-sm20">
                                                        {text}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                );
                            })}
                        </motion.ul>
                    </div>
                </div>
            </div>
        </PageSection>
    );
};
