"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

import { defineServiceIcon } from "@/src/utils/defineServiceIcon";

interface TextLineAnimatedListItemProps {
    icon: string | undefined;
}

const liVariants = {
    hidden: {
        opacity: 0,
        x: "-50%",
    },
    inView: {
        opacity: 1,
        x: "0%",
        transition: {
            duration: 0.5,
            ease: "easeIn",
        },
    },
};

const iconVariants = {
    hidden: {
        opacity: 0,
    },
    inView: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const afterVariants = {
    hidden: {
        "--scale": 0,
    },
    inView: {
        "--scale": 1,
        transition: {
            delay: 1,
            duration: 1,
            ease: "easeIn",
        },
    },
};
export const TextLineAnimatedListItem = ({
    icon,
    children,
}: PropsWithChildren<TextLineAnimatedListItemProps>) => {
    const Icon = defineServiceIcon(icon);

    return (
        <motion.li
            className="flex gap-4 tab:gap-10 pc:gap-[60px] desk:gap-[40px] "
            initial="hidden"
            whileInView="inView"
            viewport={{ margin: "100px 0px 0px", once: true }}
            variants={liVariants}
        >
            <motion.div variants={iconVariants}>
                <Icon className="text-purple-100 w-[40px] tab:w-[94px] pc:w-[160px] h-[40px] tab:h-[94px] pc:h-[160px] shrink-0 grow-0" />
            </motion.div>
            <motion.div
                variants={afterVariants}
                className="relative pc:flex pc:gap-10 items-center pb-4 tab:pb-6 pc:pb-10 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-purple-strokeLight after:dark:bg-purple-stroke after:scale-[--scale] after:origin-bottom-left grow"
            >
                {children}
            </motion.div>
        </motion.li>
    );
};
