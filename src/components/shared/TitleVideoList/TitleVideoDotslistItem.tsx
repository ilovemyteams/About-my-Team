"use client";
import { YouTubeEmbed } from "@next/third-parties/google";
import { motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { SectionWithVideoType } from "@/src/mockedData/portfolioData";

import { HighlightTitleFromMockedData } from "../HighlightTitleFromMockedData";
import { IconUp } from "../Icons/IconUp";
import { Section } from "../Section";

export const TitleVideoDotslistItem = ({
    data,
    index,
}: {
    data: SectionWithVideoType;
    index: number;
}) => {
    const { title, description, video } = data;
    const [isOpenSection, setIsOpen] = useState(false);

    const isCollapsible = index > 3;

    const onClickTitle = () => {
        if (isCollapsible) {
            setIsOpen(prev => !prev);
        }
    };

    const wrapperVariants = {
        close: {
            height: isCollapsible ? 0 : "auto",
            opacity: isCollapsible ? 0 : 1,
            transition: {
                opacity: {
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 1,
                },
                height: {
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.2,
                },
            },
        },
        open: {
            height: "auto",
            opacity: 1,
            transition: {
                opacity: {
                    duration: 0.2,
                    ease: "easeInOut",
                },
                height: {
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.2,
                },
            },
        },
    };

    return (
        <li
            className={
                isCollapsible
                    ? "last:pb-[80px] tab:last:pb-[100px] pc:last:pb-[160px] desk:last:pb-[180px]"
                    : ""
            }
        >
            <Section className={twMerge("pb-0 tab:pb-0 pc:pb-0 desk:pb-0")}>
                <div
                    className={twMerge(
                        isCollapsible
                            ? "border-b-[1px] py-6 tab:py-8 desk:py-10 border-purple-strokeLight dark:border-purple-stroke"
                            : "pb-[80px] tab:pb-[100px] pc:pb-[160px] desk:pb-[180px]",
                        index === 4 ? "pt-0 tab:pt-0 pc:pt-0 desk:pt-0" : ""
                    )}
                >
                    <div
                        className={twMerge(
                            "flex gap-4 justify-between items-start",
                            isCollapsible ? "cursor-pointer" : "cursor-default"
                        )}
                        onClick={onClickTitle}
                    >
                        <HighlightTitleFromMockedData
                            text={title}
                            className="mb-0 tab:mb-0 pc:mb-0 desk:mb-0"
                        />
                        {isCollapsible && (
                            <button
                                aria-label="open collapsible text"
                                className="relative shrink-0 cursor-pointer dark:text-red text-redLight flex justify-center items-center w-[28px] h-[28px] tab:w-[48px] tab:h-[48px] icon-hover-rounded-purple"
                            >
                                <IconUp
                                    className={twMerge(
                                        "size-[24px] tab:size-[40px] duration-300 ease-out transition-transform ",
                                        isOpenSection
                                            ? "rotate-0"
                                            : "rotate-180"
                                    )}
                                />
                            </button>
                        )}
                    </div>

                    <motion.div
                        className="overflow-clip"
                        variants={wrapperVariants}
                        initial={isOpenSection ? "open" : "close"}
                        animate={isOpenSection ? "open" : "close"}
                    >
                        <div
                            className={twMerge(
                                "flex flex-col gap-3 tab:flex-col-reverse tab:gap-10 pc:gap-[64px] pt-6 tab:pt-10 pc:pt-[64px] ",
                                isCollapsible
                                    ? " tab:pb-2 pc:pb-[32px] desk:pb-[24px]"
                                    : " "
                            )}
                        >
                            <div className="border dark:border-purple-stroke border-purple-100 p-2 pc:p-3 desk:p-4 w-full mx-auto tab:w-[75%] pc:w-[69%] max-w-[752px] tab:ml-auto tab:mr-0">
                                <YouTubeEmbed
                                    videoid={video}
                                    params="rel=0"
                                    style="margin-left:auto; margin-right:auto;"
                                />
                            </div>
                            {description && (
                                <ul className="list-disc pl-5 tab:pl-6 pc:pl-7 desk:pl-8 space-y-3 pc:space-y-4">
                                    {description.map((text, i) => (
                                        <li
                                            key={i}
                                            className="max-w-full text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 text-greyLight dark:text-grey"
                                        >
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </motion.div>
                </div>
            </Section>
        </li>
    );
};
