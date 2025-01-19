"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface DelayPresentAnimationProps {
    delay?: number;
    className?: string;
}

export const DelayPresentAnimation = ({
    children,
    delay = 1,
    className = "",
}: PropsWithChildren<DelayPresentAnimationProps>) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
