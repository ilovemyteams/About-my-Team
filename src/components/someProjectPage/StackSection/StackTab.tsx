"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLayoutEffect, useRef, useState } from "react";

import { Technology } from "@/src/mockedData/portfolioData";

import { Button } from "../../shared/Button";
import { StackCard } from "./StackCard";

export const StackTab = ({ technologies }: { technologies: Technology[] }) => {
    const t = useTranslations("Buttons");
    const [showAll, setShowAll] = useState(false);

    const initialItems = technologies.slice(0, 9);
    const extraItems = technologies.slice(9);

    const toggleShowAll = () => setShowAll(prev => !prev);

    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    useLayoutEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight + 24);
        }
    }, [showAll, extraItems.length]);

    return (
        <div className="relative tab:mb-[72px]">
            <ul className="flex gap-4 pc:gap-5 flex-wrap">
                {initialItems.map(technology => (
                    <li
                        key={technology}
                        className="flex gap-2 items-center pc:gap-4 desk:gap-6 
                        min-w-[136px] w-[calc(50%-8px)] tab:min-w-[168px] tab:w-[23.3%]
                        pc:min-w-[200px] pc:w-[18.5%] min-h-[74px]
                        px-3 py-4 tab:px-4 pc:p-5 desk:p-6  bg-purple-stackCardBG"
                    >
                        <StackCard technology={technology} />
                    </li>
                ))}
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
                        className="-mt-[90px]"
                    >
                        <div ref={contentRef}>
                            <ul className="flex gap-4 pc:gap-5 flex-wrap mt-4">
                                <li
                                    className="min-w-[136px] w-[calc(50%-8px)] tab:min-w-[168px] tab:w-[23.3%] pc:min-w-[200px] pc:w-[18.5%] min-h-[74px] px-3 py-4 tab:px-4 pc:p-5 desk:p-6"
                                    aria-hidden="true"
                                />
                                {extraItems.map(technology => (
                                    <li
                                        key={technology}
                                        className="flex gap-2 items-center pc:gap-4 desk:gap-6 
              min-w-[136px] w-[calc(50%-8px)] tab:min-w-[168px] tab:w-[23.3%]
              pc:min-w-[200px] pc:w-[18.5%] min-h-[74px]
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
            <motion.div
                className="w-[200px] absolute"
                animate={{
                    bottom: showAll ? -72 : 8,
                    left: showAll ? "50%" : `calc((100% - 48px) / 4 + 16px)`,
                    x: showAll ? "-50%" : "0%",
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <Button cookie onClick={toggleShowAll}>
                    {showAll ? t("showLess") : t("showAll")}
                </Button>
            </motion.div>
        </div>
    );
};
