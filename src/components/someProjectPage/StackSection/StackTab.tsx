"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Technology } from "@/src/mockedData/portfolioData";

import { Button } from "../../shared/Button";
import { StackCard } from "./StackCard";

const MAX_ITEMS = 7; // Maximum items to show initially

export const StackTab = ({ technologies }: { technologies: Technology[] }) => {
    const t = useTranslations("Buttons");
    const [showAll, setShowAll] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);
    const [contentHeight, setContentHeight] = useState<number | "auto">("auto");
    const initialItems = technologies.slice(0, MAX_ITEMS);
    const extraItems = technologies.slice(MAX_ITEMS);
    const contentRef = useRef<HTMLUListElement>(null);

    const toggleShowAll = () => {
        setTimeout(() => setShowAll(prev => !prev), 200);
        setIsAnimated(true);

        setTimeout(() => {}, 1000);
    };

    const buttonVariants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    useEffect(() => {
        if (contentRef.current) {
            const height = contentRef.current.scrollHeight;
            setContentHeight(height);
        }
    }, [showAll]);

    return (
        <motion.div
            initial={{ height: "auto" }}
            animate={{ height: contentHeight }}
            transition={{
                duration: extraItems.length * 0.05 + 0.5,
                ease: "easeInOut",
            }}
            onAnimationComplete={() => setIsAnimated(false)}
        >
            <ul
                ref={contentRef}
                className="grid grid-cols-3 pc:grid-cols-4 desk:grid-cols-5 gap-4 pc:gap-5 flex-wrap pc:pb-[60px]"
            >
                {initialItems.map(technology => (
                    <motion.li
                        key={technology}
                        layout
                        className="flex gap-2 items-center pc:gap-4 desk:gap-6 
                        px-3 py-4 tab:px-4 pc:p-5 desk:p-6 bg-purple-stackCardBG"
                    >
                        <StackCard technology={technology} />
                    </motion.li>
                ))}
                <AnimatePresence mode="popLayout">
                    {showAll &&
                        extraItems.map((technology, index) => (
                            <motion.li
                                key={technology}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: {
                                        duration: 0.3,
                                        delay: 0.1 + index * 0.05,
                                        ease: "easeOut",
                                    },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {
                                        duration: 0.3,
                                        delay:
                                            (extraItems.length - index - 1) *
                                            0.05,
                                        ease: "easeOut",
                                    },
                                }}
                                layout
                                className="flex gap-2 items-center pc:gap-4 desk:gap-6 
                        px-3 py-4 tab:px-4 pc:p-5 desk:p-6 bg-purple-stackCardBG"
                            >
                                <StackCard technology={technology} />
                            </motion.li>
                        ))}
                </AnimatePresence>

                {extraItems.length > 0 && (
                    <motion.li
                        variants={buttonVariants}
                        initial="visible"
                        animate={isAnimated ? "hidden" : "visible"}
                        transition={{
                            duration: 0.2,
                        }}
                        className={twMerge(
                            "flex pb-[2px] pr-[14px] pc:pb-[10px] pc:pr-[28px]",
                            showAll
                                ? "col-span-3 pc:col-span-4 desk:col-span-5 justify-center items-center"
                                : "col-span-1 justify-end items-end"
                        )}
                    >
                        <div className="w-[200px]">
                            <Button cookie onClick={toggleShowAll}>
                                {showAll ? t("showLess") : t("showAll")}
                            </Button>
                        </div>
                    </motion.li>
                )}
            </ul>
        </motion.div>
    );
};
