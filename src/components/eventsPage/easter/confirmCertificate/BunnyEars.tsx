"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const BunnyEars = () => {
    return (
        <div className="hidden tab:flex absolute bottom-[-20px] right-[5%] w-[95px] aspect-[95/130] mb-[-20px] pc:right-[10%]">
            <motion.div
                animate={{
                    rotate: [0, -10, 5, -5, 0, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 7,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                }}
                style={{
                    transformOrigin: "bottom center",
                }}
            >
                <Image
                    src="/images/easter/left-ear.svg"
                    alt="left ear"
                    width={28}
                    height={118}
                />
            </motion.div>

            <motion.div
                animate={{
                    rotate: [0, 10, -5, 5, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                }}
                style={{
                    transformOrigin: "bottom center",
                }}
            >
                <Image
                    src="/images/easter/right-ear.svg"
                    alt="right ear"
                    width={42}
                    height={114}
                />
            </motion.div>
        </div>
    );
};
