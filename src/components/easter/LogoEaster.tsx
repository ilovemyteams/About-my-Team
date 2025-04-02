"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { IconLogoEaster } from "./icons/IconLogoEaster";

export const LogoEaster = ({ className }: { className?: string }) => {
    return (
        <div
            className={`relative ${className} min-w-[230px] w-[85%] tab:w-[380px] pc:w-[435px] desk:w-[567px] h-auto`}
        >
            <div className="relative w-full">
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
                    className="absolute w-[5.7%] tab:w-[20px] pc:w-6 desk:w-8 left-[14%] tab:left-[56px] pc:left-[62px] desk:left-[84px] top-[-88%] tab:top-[-80px] pc:top-[-96px] desk:top-[-110px] h-auto"
                >
                    <Image
                        src="/images/easter/left-ear.svg"
                        alt="left ear"
                        width={28}
                        height={118}
                        // className="min-w-4 w-[5%] h-auto"
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
                    className="absolute w-[8.5%] tab:w-[30px] pc:w-[36px] desk:w-[42px] left-[21%] tab:left-[80px] pc:left-[90px] desk:left-[118px] top-[-86%] tab:top-[-78px] pc:top-[-92px] desk:top-[-106px] h-auto"
                >
                    <Image
                        src="/images/easter/right-ear.svg"
                        alt="right ear"
                        width={42}
                        height={114}
                        // className="min-w-4 w-[5%] h-auto"
                    />
                </motion.div>
                <IconLogoEaster className="dark:text-white-200 text-purple-200 w-full h-auto" />
            </div>
        </div>
    );
};
