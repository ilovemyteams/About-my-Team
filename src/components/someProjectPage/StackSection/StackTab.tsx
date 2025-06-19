"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLayoutEffect, useRef, useState } from "react";

import { SCREEN_NAMES } from "@/src/constants/screenNames";
import { useScreenSize } from "@/src/hooks/useScreenSize";
import { Technology } from "@/src/mockedData/portfolioData";

import { Button } from "../../shared/Button";
import { StackCard } from "./StackCard";

const MAX_ITEMS = 7; // Maximum items to show initially

export const StackTab = ({ technologies }: { technologies: Technology[] }) => {
    const t = useTranslations("Buttons");
    const [showAll, setShowAll] = useState(false);
    const screenSizeName = useScreenSize();
    const { pcName, desktopName } = SCREEN_NAMES;
    const initialItems = technologies.slice(0, MAX_ITEMS);
    const extraItems = technologies.slice(MAX_ITEMS);

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
                        min-w-[136px] w-[calc(50%-8px)] tab:min-w-[229px] tab:w-[31.85%]
                        pc:min-w-[250px] pc:w-[22%] desk:min-w-[251px] desk:w-[18.8%] 
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
                        className="-mt-[60px] pc:-mt-[76px] desk:-mt-[84px]"
                    >
                        <div ref={contentRef}>
                            <ul className="flex gap-4 pc:gap-5 flex-wrap">
                                <li
                                    className="desk:hidden min-w-[136px] w-[calc(50%-8px)] tab:min-w-[229px] tab:w-[31.85%] pc:min-w-[255px] pc:w-[23.6%] desk:min-w-[251px] desk:w-[18.8%] px-3 py-4 tab:px-4 pc:p-5 desk:p-6"
                                    aria-hidden="true"
                                />
                                {[...Array(2)].map((_, index) => (
                                    <li
                                        key={`empty-pc-${index}`}
                                        className="hidden pc:block min-w-[255px] w-[23.6%] desk:min-w-[251px] desk:w-[18.8%] px-3 py-4 pc:p-5 desk:p-6"
                                        aria-hidden="true"
                                    />
                                ))}
                                {extraItems.map(technology => (
                                    <li
                                        key={technology}
                                        className="flex gap-2 items-center pc:gap-4 desk:gap-6 
              min-w-[136px] w-[calc(50%-8px)] tab:min-w-[229px] tab:w-[31.85%]
              pc:min-w-[255px] pc:w-[23.6%] desk:min-w-[251px] desk:w-[18.8%]
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
                    bottom: showAll
                        ? -60
                        : screenSizeName === pcName ||
                            screenSizeName === desktopName
                          ? 10
                          : 2,
                    left:
                        screenSizeName === desktopName
                            ? "50%"
                            : screenSizeName === pcName
                              ? showAll
                                  ? "50%"
                                  : "auto"
                              : "50%",
                    right: screenSizeName === pcName ? "28px" : "auto",
                    x:
                        screenSizeName === pcName
                            ? !showAll
                                ? 0
                                : "-50%"
                            : "-50%",
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
