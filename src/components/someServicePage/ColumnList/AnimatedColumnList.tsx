"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: "easeOut" },
    },
};
export const AnimatedColumnList = ({ children }: PropsWithChildren) => {
    return (
        <motion.li
            initial="hidden"
            whileInView="visible"
            variants={variants}
            viewport={{ once: true }}
            className={`relative py-6 tab:py-0 tab:px-5 pc:px-[50px] last:pb-0 tab:last:pr-0 first:pt-0 
              [&:nth-child(3n-2)]:tab:pl-0 border-b-[1px] tab:border-r-[1px] tab:border-b-0 border-redLight dark:border-red
              tab:[&:nth-child(3n)]:border-none last:border-none tab:after:absolute after:w-[101%] after:h-[1px]
               after:bg-redLight after:dark:bg-red after:-top-[21px] pc:after:-top-10 after:left-0
               [&:nth-child(-n+3)]:after:hidden [&:nth-child(2n)]:origin-left [&:nth-child(2n+1)]:origin-right
               tab:[&:nth-child(6n)]:origin-bottom-right tab:[&:nth-child(6n+3)]:origin-top-right 
               tab:[&:nth-child(6n+1)]:origin-top-left tab:[&:nth-child(6n+4)]:origin-bottom-left
               tab:[&:nth-child(6n+2)]:origin-top tab:[&:nth-child(6n+5)]:origin-bottom`}
        >
            {children}
        </motion.li>
    );
};
