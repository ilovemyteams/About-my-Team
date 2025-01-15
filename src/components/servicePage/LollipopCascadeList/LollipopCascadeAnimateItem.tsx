"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export const LollipopCascadeAnimateItem = ({ children }: PropsWithChildren) => {
    return (
        <motion.li
            className={`flex even:flex-row-reverse tab:even:flex-row gap-6 tab:gap-8 desk:gap-12 even:ml-auto w-full tab:w-[62.5%] pc:w-[46.8%] desk:w-[41%]`}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.li>
    );
};
