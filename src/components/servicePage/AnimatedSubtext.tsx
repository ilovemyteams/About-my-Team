"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

interface AnimatedSubtextProps {
    text: string;
}

export const AnimatedSubtext = ({ text }: AnimatedSubtextProps) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));
    const displayedText = useTransform(rounded, latest =>
        text.slice(0, latest)
    );
    useEffect(() => {
        const controls = animate(count, text.length, {
            type: "tween", // Not really needed because adding a duration will force "tween"
            duration: 1,
            ease: "easeInOut",
            delay: 1,
        });
        return controls.stop;
    }, []);

    return <motion.span>{displayedText}</motion.span>;
};
