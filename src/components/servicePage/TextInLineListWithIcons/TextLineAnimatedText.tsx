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
            delay: 1,
            ease: "easeOut",
            duration: 0.5,
        },
    },
};

export const TextLineAnimatedText = ({ children }: PropsWithChildren) => {
    return <motion.div variants={variant}>{children}</motion.div>;
};
