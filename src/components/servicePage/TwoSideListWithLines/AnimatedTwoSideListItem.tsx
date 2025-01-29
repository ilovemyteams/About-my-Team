"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const variants = {
    hidden: {
        y: "100%",
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            easy: "easyOut",
        },
    },
};

export const AnimatedTwoSideListItem = ({ children }: PropsWithChildren) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px 0px 0px" }}
            className="tab:grow-0 tab:shrink-0 tab:group-odd:w-[calc(50%_+_1px)] tab:group-even:w-1/2 tab:border-t-[1px] tab:border-b-[1px] tab:group-even:border-l-[1px] tab:group-odd:border-r-[1px]
            tab:mb-[-1px] border-purple-strokeLight dark:border-purple-stroke tab:px-7 tab:py-6 pc:py-7 overflow-clip"
        >
            <motion.div variants={variants}>{children}</motion.div>
        </motion.div>
    );
};
