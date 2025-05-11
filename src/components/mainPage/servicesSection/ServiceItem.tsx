"use client";
import { motion } from "framer-motion";
import { PointerEvent } from "react";

interface ServiceItemProps {
    title: string;
    text: string;
    id: string;

    onChangeSection: (id: string) => void;
    isOpen: boolean;
}

export const ServiceItem = ({
    text,
    title,
    id,

    onChangeSection,
    isOpen,
}: ServiceItemProps) => {
    const onClick = (e: PointerEvent<HTMLLIElement>) => {
        if (e.pointerType === "touch" || e.pointerType === "pen") {
            onChangeSection(id);
        }
    };
    const bgVariants = {
        close: {
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
        open: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        },
    };

    const wrapperVariants = {
        close: { height: 0, opacity: 0, transition: { duration: 0.5 } },
        open: {
            height: "auto",
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 0.5,
            },
        },
    };

    return (
        <li
            className="relative py-6 first:border-y-[1px]  border-b-[1px] border-purple-strokeLight dark:border-purple-stroke "
            // onClick={onClick}
            onPointerDown={onClick}
        >
            <motion.div
                className="absolute inset-0 bg-homeServiceCardGradientLight dark:bg-homeServiceCardGradientDark -z-[1]"
                variants={bgVariants}
                initial={isOpen ? "open" : "close"}
                animate={isOpen ? "open" : "close"}
            ></motion.div>
            <div className="flex gap-2">
                <div className="m-[3px] shrink-0 grow-0">
                    <div className="size-[18px] border-[3px] border-redLight dark:border-red" />
                </div>
                <h3 className="font-caviar font-bold text-xl text-purple-200 dark:text-white-200">
                    {title}
                </h3>
            </div>

            <motion.div
                initial={isOpen ? "open" : "close"}
                animate={isOpen ? "open" : "close"}
                variants={wrapperVariants}
                className="overflow-clip"
            >
                <p className="text-base pt-6">{text}</p>
            </motion.div>
        </li>
    );
};
