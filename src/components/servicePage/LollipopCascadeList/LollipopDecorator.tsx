"use client";
import { motion } from "framer-motion";

import { IconHexagon } from "../../shared/Icons/IconHexagon";

interface LollipopDecoratorProps {
    indexNumber?: number;
}

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: {
                    delay,
                    duration: 0.6,
                    bounce: 0,
                    ease: "easeOut",
                },
                opacity: { delay, duration: 0.01 },
            },
        };
    },
};

export const LollipopDecorator = ({ indexNumber }: LollipopDecoratorProps) => {
    // TODO: refactor this component to adopt child
    // to make it reusable
    // and replace <span> below with child
    const itemNumber =
        indexNumber != undefined
            ? indexNumber < 10
                ? `0${indexNumber + 1}`
                : `${indexNumber + 1}`
            : "";

    return (
        <motion.div
            className="flex flex-col"
            initial="hidden"
            whileInView="visible"
        >
            <motion.div
                className="relative mt-[5px]"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                custom={1}
            >
                <IconHexagon className=" w-[67px] h-[57px] pc:w-[80px] pc:h-[70px] dark:text-purple-stroke text-purple-strokeLight" />
                {itemNumber.length > 0 && (
                    <span className="font-caviar text-3xl pc:text-4xl text-purple-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {itemNumber}
                    </span>
                )}
            </motion.div>
            <div className="grow overflow-clip relative">
                <motion.svg
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`dark:text-purple-stroke text-purple-strokeLight absolute top-0 min-h-full left-1/2 -translate-x-1/2`}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 2 }}
                >
                    <motion.line
                        x1="50"
                        y1="0"
                        x2="50"
                        y2="100"
                        stroke="currentColor"
                        variants={draw}
                        custom={2}
                    />
                </motion.svg>
            </div>
        </motion.div>
    );
};
