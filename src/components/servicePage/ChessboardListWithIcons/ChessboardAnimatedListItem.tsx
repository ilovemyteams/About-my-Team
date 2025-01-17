"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export const ChessboardAnimatedListItem = ({ children }: PropsWithChildren) => {
    return (
        <motion.li
            className="flex flex-row-reverse gap-[14px] tab:gap-[1.32%] pc:gap-[4.537%] desk:gap-[2.1%] mb-8 last:mb-0 tab:mb-6 tab:odd:flex-row "
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-50px 0px 0px" }}
        >
            {children}
        </motion.li>
    );
};
