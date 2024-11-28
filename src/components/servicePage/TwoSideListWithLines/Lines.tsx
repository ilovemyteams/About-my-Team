"use client";
import { motion } from "framer-motion";

export const Lines = () => {
    const lines = new Array(6).fill(null);
    const duration = 3;

    return (
        <div
            className="inline-flex gap-4 tab:gap-5 justify-center h-[60px] tab:h-[90px] 
                    tab:items-center tab:justify-center"
            aria-label="decoration"
        >
            {lines.map((_, index) => {
                const delay = (index + 1) * (duration / 6);

                const activeColor = "#A258FF";
                const plainColor =
                    "bg-purple-strokeLight dark:bg-purple-stroke";

                return (
                    <motion.div
                        key={index}
                        className={`h-full w-[1px] ${plainColor}`}
                        animate={{
                            backgroundColor: activeColor,
                        }}
                        transition={{
                            duration,
                            repeat: Infinity,
                            delay: delay,
                            ease: "easeInOut",
                        }}
                    />
                );
            })}
        </div>
    );
};
