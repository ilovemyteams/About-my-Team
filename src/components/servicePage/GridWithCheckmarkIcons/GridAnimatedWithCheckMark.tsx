"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

import { IconCheckmarkWithinSquare } from "../../shared/Icons/IconCheckmarkWithinSquare";

interface GridAnimatedWithCheckMarkProps {
    className: string | undefined;
    index: number;
}

export const GridAnimatedWithCheckMark = ({
    children,
    index,
    className,
}: PropsWithChildren<GridAnimatedWithCheckMarkProps>) => {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true, margin: "-50px 0px 50px" });

    const isElementOdd = index % 2 === 0;

    const translateIndex = isElementOdd ? index : index - 1;
    const translateX = Math.min(translateIndex * 15 + 20, 100);
    const delay = 1;
    const elementDelay = delay + 1;

    const initialState = isElementOdd
        ? { x: `-${translateX}%`, opacity: 0 }
        : { x: `${translateX}%`, opacity: 0 };
    const animatedState = { x: 0, opacity: 1 };

    return (
        <motion.li
            className={className || ""}
            initial={initialState}
            whileInView={animatedState}
            viewport={{ once: true, margin: "-100px 0px 50px" }}
            ref={ref}
            transition={{
                type: "tween",
                delay: delay,
                duration: 1,
                ease: "easeOut",
            }}
        >
            <AnimatePresence>
                {isInView && (
                    <div className="mb-2">
                        <motion.div
                            initial={{ opacity: 0, scaleY: 0, rotate: 90 }}
                            animate={{ opacity: 1, scaleY: 1, rotate: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: elementDelay,
                                ease: "easeOut",
                            }}
                            className="w-[18px] h-[18px]"
                        >
                            <IconCheckmarkWithinSquare className="text-redLight dark:text-red" />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {isInView && (
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "100%", opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: elementDelay,
                            ease: "easeOut",
                        }}
                        className="mb-8 w-full h-[1px] bg-purple-strokeLight dark:bg-purple-stroke"
                    />
                )}
            </AnimatePresence>

            {children}
        </motion.li>
    );
};
