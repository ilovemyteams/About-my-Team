"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Button } from "@/src/components/shared/Button";
import { membersData } from "@/src/mockedData/membersData";
import { getTeammates } from "@/src/utils/getTeammates";
import { Project } from "@/types/Projects";

import { TeammateCard } from "./TeammateCard";

interface TeammatesProps {
    projects: Project[];
    id: string;
}

const INITIAL_VISIBLE = 5;

export const TeammatesCardList = ({ projects, id }: TeammatesProps) => {
    const t = useTranslations("Buttons");
    const [showAll, setShowAll] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);
    const [contentHeight, setContentHeight] = useState<number | "auto">("auto");
    const teammates = getTeammates(membersData, projects, id);
    const initialItems = teammates.slice(0, INITIAL_VISIBLE);
    const extraItems = teammates.slice(INITIAL_VISIBLE);
    const contentRef = useRef<HTMLUListElement>(null);

    const toggleShowAll = () => {
        setTimeout(() => setShowAll(prev => !prev), 10);
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
                duration: extraItems.length * 0.04,
                ease: "easeInOut",
            }}
            onAnimationComplete={() => setIsAnimated(false)}
            // className="hidden pc:block"
        >
            <ul
                ref={contentRef}
                className="grid grid-cols-1 min-[1024px]:grid-cols-2 pc:grid-cols-3 gap-4"
            >
                {initialItems.map(data => (
                    <motion.li key={data.data.id} layout>
                        <TeammateCard data={data} />
                    </motion.li>
                ))}

                <AnimatePresence mode="popLayout">
                    {showAll &&
                        extraItems.map((data, index) => (
                            <motion.li
                                layout
                                key={data.data.id}
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
                                        duration: 0.2,
                                        delay:
                                            (extraItems.length - index - 1.5) *
                                            0.04,
                                        ease: "easeOut",
                                    },
                                }}
                            >
                                <TeammateCard data={data} />
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
                            "flex",
                            showAll
                                ? "col-span-1 min-[1024px]:col-span-2 pc:col-span-3 justify-center items-center"
                                : "col-span-1 justify-center min-[1024px]:justify-start"
                        )}
                    >
                        <Button
                            className="tab:w-[200px]"
                            onClick={toggleShowAll}
                        >
                            {showAll ? t("showLess") : t("allTeammates")}
                        </Button>
                    </motion.li>
                )}
            </ul>
        </motion.div>
    );
};
