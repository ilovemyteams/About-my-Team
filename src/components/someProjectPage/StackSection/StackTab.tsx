"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLayoutEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Technology } from "@/src/mockedData/portfolioData";

import { Button } from "../../shared/Button";
import { StackCard } from "./StackCard";

const MAX_ITEMS = 7; // Maximum items to show initially

export const StackTab = ({ technologies }: { technologies: Technology[] }) => {
    const t = useTranslations("Buttons");
    const [showAll, setShowAll] = useState(false);
    const initialItems = technologies.slice(0, MAX_ITEMS);
    const extraItems = technologies.slice(MAX_ITEMS);

    const toggleShowAll = () => {
        setShowAll(prev => !prev);
    };

    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    useLayoutEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight + 24);
        }
    }, [showAll, extraItems.length]);

    const buttonVariants = {
        visible: { opacity: 1, transition: { delay: 0.8 } },
        hidden: { opacity: 0, transition: { delay: 0 } },
    };

    return (
        <div className="relative ">
            <ul className="flex gap-4 pc:gap-5 flex-wrap">
                {initialItems.map(technology => (
                    <li
                        key={technology}
                        className="flex gap-2 items-center pc:gap-4 desk:gap-6 
                        min-w-[136px] w-[calc(50%-8px)] tab:min-w-[229px] tab:w-[31.85%]
                        pc:min-w-[250px] pc:w-[23%] desk:min-w-[248px] desk:w-[18.5%] 
                        px-3 py-4 tab:px-4 pc:p-5 desk:p-6  bg-purple-stackCardBG"
                    >
                        <StackCard technology={technology} />
                    </li>
                ))}

                {extraItems.length > 0 && (
                    <motion.li
                        initial="visible"
                        aria-hidden={showAll}
                        variants={buttonVariants}
                        animate={showAll ? "hidden" : "visible"}
                        transition={{
                            duration: 0.2,
                        }}
                        className="flex gap-2 items-end justify-end pc:gap-4 desk:gap-6 
                        tab:min-w-[229px] tab:w-[31.85%]
                        pc:min-w-[250px] pc:w-[23%] desk:min-w-[248px] desk:w-[18.5%] 
                        pb-[2px] pr-[14px] pc:pb-[10px] pc:pr-[28px] desk:pr-[16px]"
                    >
                        <div className="w-[200px]">
                            <Button cookie onClick={toggleShowAll}>
                                {t("showAll")}
                            </Button>
                        </div>
                    </motion.li>
                )}
            </ul>

            <AnimatePresence initial={false}>
                {showAll && (
                    <motion.div
                        key="expansion"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: contentHeight, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                        className="-mt-[60px] pc:-mt-[76px] desk:-mt-[84px]"
                    >
                        <div ref={contentRef}>
                            <ul className="flex gap-4 pc:gap-5 flex-wrap">
                                <li
                                    className="desk:hidden min-w-[136px] w-[calc(50%-8px)] tab:min-w-[229px] tab:w-[31.85%] pc:min-w-[250px] pc:w-[23%] desk:min-w-[248px] desk:w-[18.5%] px-3 py-4 tab:px-4 pc:p-5 desk:p-6"
                                    aria-hidden="true"
                                />
                                {[...Array(2)].map((_, index) => (
                                    <li
                                        key={`empty-pc-${index}`}
                                        className="hidden pc:block pc:min-w-[250px] pc:w-[23%] desk:min-w-[248px] desk:w-[18.5%] px-3 py-4 pc:p-5 desk:p-6"
                                        aria-hidden="true"
                                    />
                                ))}
                                {extraItems.map(technology => (
                                    <li
                                        key={technology}
                                        className="flex gap-2 items-center pc:gap-4 desk:gap-6 
              min-w-[136px] w-[calc(50%-8px)] tab:min-w-[229px] tab:w-[31.85%]
              pc:min-w-[250px] pc:w-[23%] desk:min-w-[248px] desk:w-[18.5%]
              px-3 py-4 tab:px-4 pc:p-5 desk:p-6  bg-purple-stackCardBG"
                                    >
                                        <StackCard technology={technology} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div
                className={twMerge(
                    "flex justify-center items-center",
                    showAll ? "pointer-events-auto" : "pointer-events-none"
                )}
            >
                <motion.div
                    aria-hidden={!showAll}
                    className="w-[200px]"
                    initial="hidden"
                    variants={buttonVariants}
                    animate={showAll ? "visible" : "hidden"}
                    transition={{
                        duration: 0.2,
                    }}
                >
                    <Button cookie onClick={toggleShowAll}>
                        {t("showLess")}
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};
