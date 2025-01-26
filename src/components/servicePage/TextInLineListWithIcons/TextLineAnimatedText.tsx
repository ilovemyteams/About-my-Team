"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const variant = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    inView: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: "easeOut",
            delay: 0.2,
            duration: 1,
        },
    },
};

export const TextLineAnimatedText = ({ children }: PropsWithChildren) => {
    return (
        <motion.div variants={variant} className="origin-right">
            {children}
        </motion.div>
    );
};
