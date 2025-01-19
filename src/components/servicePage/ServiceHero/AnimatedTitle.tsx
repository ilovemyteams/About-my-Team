"use client";

import { motion } from "framer-motion";
import React from "react";

import { HighlightPurpleItemType } from "@/src/utils/highlightingPurple";

import { AnimatedSubtext } from "./AnimatedSubtext";

interface AnimatedTitleProps {
    title: HighlightPurpleItemType[];
}

export const AnimatedTitle = ({ title }: AnimatedTitleProps) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full" aria-hidden>
            {title.map((item, i) => {
                if (item.decoration === "purple")
                    return (
                        <motion.span
                            key={i}
                            className="text-purple-100 inline-block"
                            initial={{
                                opacity: 0,
                                x: "50%",
                            }}
                            animate={{
                                opacity: [0.5, 1, 1],
                                x: ["50%", "50%", 0],
                            }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                            }}
                        >
                            {item.text}
                        </motion.span>
                    );
                return <AnimatedSubtext text={item.text} key={i} />;
            })}
        </div>
    );
};
