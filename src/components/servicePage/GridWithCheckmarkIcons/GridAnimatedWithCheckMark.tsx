"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

import { IconCheckmarkWithinSquare } from "../../shared/Icons/IconCheckmarkWithinSquare";

interface GridAnimatedWithCheckMarkProps {
    className: string | undefined;
    index: number;
}

const iconVariants = {
    hidden: { opacity: 0, scaleY: 0, rotate: 90 },
    visible: {
        opacity: 1,
        scaleY: 1,
        rotate: 0,
        transition: {
            duration: 0.5,
            delay: 0.5,
            ease: "easeOut",
        },
    },
};

const lineVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.5,
            ease: "easeOut",
        },
    },
};

export const GridAnimatedWithCheckMark = ({
    children,
    index,
    className,
}: PropsWithChildren<GridAnimatedWithCheckMarkProps>) => {
    const isElementOdd = index % 2 === 0;

    const translateIndex = isElementOdd ? index : index - 1;
    const translateX = Math.min(translateIndex * 15 + 20, 100);

    const initialState = isElementOdd
        ? { x: `-${translateX}%`, opacity: 0 }
        : { x: `${translateX}%`, opacity: 0 };

    const cardVariants = {
        hidden: initialState,
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };
    return (
        <motion.li
            className={className || ""}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true, margin: "-100px 0px 50px" }}
        >
            <div className="mb-2">
                <motion.div
                    variants={iconVariants}
                    className="w-[18px] h-[18px]"
                >
                    <IconCheckmarkWithinSquare className="text-redLight dark:text-red" />
                </motion.div>
            </div>

            <motion.div
                variants={lineVariants}
                className="mb-8 w-full h-[1px] bg-purple-strokeLight dark:bg-purple-stroke origin-left"
            />

            {children}
        </motion.li>
    );
};
