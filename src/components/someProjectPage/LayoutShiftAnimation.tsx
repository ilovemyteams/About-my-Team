"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export const LayoutShiftAnimation = ({ children }: PropsWithChildren) => {
    return (
        <motion.div layout transition={{ duration: 0.6, ease: "easeInOut" }}>
            {children}
        </motion.div>
    );
};
