"use client";
import { motion } from "framer-motion";

import { IconHexagon } from "../../shared/Icons/IconHexagon";

interface LollipopDecoratorProps {
    indexNumber?: number;
}

const signVariant = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, delay: 1, ease: "easeOut" },
    },
};

const lineVariant = {
    hidden: {
        scale: 0,
    },
    visible: {
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 0.5,
            ease: "easeOut",
        },
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
            viewport={{ once: true, margin: "100px 0px 0px" }}
        >
            <motion.div className="relative mt-[5px]" variants={signVariant}>
                <IconHexagon className=" w-[67px] h-[57px] pc:w-[80px] pc:h-[70px] dark:text-purple-stroke text-purple-strokeLight" />
                {itemNumber.length > 0 && (
                    <span className="font-caviar text-3xl pc:text-4xl text-purple-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {itemNumber}
                    </span>
                )}
            </motion.div>
            <motion.div
                variants={lineVariant}
                className="grow mx-auto w-[1px] h-full dark:bg-purple-stroke bg-purple-strokeLight origin-bottom"
            ></motion.div>
        </motion.div>
    );
};
