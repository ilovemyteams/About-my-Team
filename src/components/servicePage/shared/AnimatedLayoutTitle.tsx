"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";

import { AnimatedTextAppearance } from "./AnimatedTextAppearance";

interface AnimatedLayoutTitleProps {
    text: string;
}

export const AnimatedLayoutTitle = ({ text }: AnimatedLayoutTitleProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "100px 0px 0px" });

    return (
        <motion.span ref={ref} className="absolute top-0 left-0 w-full h-full">
            {isInView && (
                <AnimatePresence>
                    <AnimatedTextAppearance text={text} />
                </AnimatePresence>
            )}
        </motion.span>
    );
};
