"use client";

import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";

import { SCREEN_SIZES } from "@/src/constants/screenSizes";
import { HighlightPurpleItemType } from "@/src/utils/highlightingPurple";

import { AnimatedSubtext } from "./AnimatedSubtext";

interface AnimatedTitleProps {
    title: HighlightPurpleItemType[];
}

export const AnimatedTitle = ({ title }: AnimatedTitleProps) => {
    const isMobile = useRef(false);
    useLayoutEffect(() => {
        const setDevice = () => {
            isMobile.current = window?.innerWidth < SCREEN_SIZES.tablet;
        };
        setDevice();
    }, []);

    const initialTransformAnimation = isMobile.current
        ? { x: "50%", marginLeft: 0 }
        : { x: "0", marginLeft: "30%" };

    const animateTransformationAnimation = isMobile.current
        ? { x: ["50%", "50%", 0], marginLeft: [0, 0, 0] }
        : { x: [0, 0, 0], marginLeft: ["30%", "30%", 0] };

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
                                ...initialTransformAnimation,
                            }}
                            animate={{
                                opacity: [0.5, 1, 1],
                                ...animateTransformationAnimation,
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
