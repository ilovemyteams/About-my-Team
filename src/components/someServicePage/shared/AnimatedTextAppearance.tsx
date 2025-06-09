"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

interface AnimatedTextAppearanceProps {
    text: string;
    delay?: number;
}

export const AnimatedTextAppearance = ({
    text,
    delay = 0,
}: AnimatedTextAppearanceProps) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));
    const displayedText = useTransform(rounded, latest =>
        text.slice(0, latest)
    );
    useEffect(() => {
        const controls = animate(count, text.length, {
            type: "tween",
            duration: 1,
            ease: "easeInOut",
            delay: delay,
        });
        return controls.stop;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <motion.span>{displayedText}</motion.span>;
};
