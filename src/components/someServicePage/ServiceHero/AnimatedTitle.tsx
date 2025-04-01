"use client";

import { motion } from "framer-motion";

import { HighlightPurpleItemType } from "@/src/utils/highlightingPurple";

import { AnimatedTextAppearance } from "../shared/AnimatedTextAppearance";

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
                            className="text-purple-100 inline-block [--marginLeft-from:0] tab:[--marginLeft-from:30%] [--scale-from:0] tab:[--scale-from:1] "
                            initial={{
                                opacity: 0,
                                marginLeft: "var(--marginLeft-from)",
                                scale: "var(--scale-from)",
                            }}
                            animate={{
                                opacity: 1,
                                marginLeft: 0,
                                scale: 1,
                            }}
                            transition={{
                                marginLeft: {
                                    delay: 0.5,
                                    duration: 0.5,
                                    ease: "easeOut",
                                },
                                opacity: {
                                    duration: 0.5,
                                    ease: "easeOut",
                                },
                                scale: {
                                    duration: 0.5,
                                    ease: "easeOut",
                                },
                            }}
                        >
                            {item.text}
                        </motion.span>
                    );
                return (
                    <AnimatedTextAppearance
                        text={item.text}
                        key={i}
                        delay={1}
                    />
                );
            })}
        </div>
    );
};
