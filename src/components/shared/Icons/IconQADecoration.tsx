"use client";

import { motion } from "framer-motion";

import { IconProps } from "../../../../types/iconProps.interface";

export const IconQADecoration = ({ className }: IconProps) => {
    const duration = 1.4;

    const pathArray = [
        "M101.231 78.5L55 116.354L8.76851 78.5L101.231 78.5Z",
        "M101.231 52.5L55 90.3538L8.76851 52.5L101.231 52.5Z",
        "M101.231 26.5L55 64.3538L8.76851 26.5L101.231 26.5Z",
        "M101.231 0.500001L55 38.3538L8.76851 0.500009L101.231 0.500001Z",
    ];

    return (
        <svg
            viewBox="0 0 110 117"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="list content pointer icon"
        >
            <g clipPath="url(#clip0_12080_24128)">
                {pathArray.map((path, index) => {
                    const delay = (index + 1) * (duration / 4);
                    return (
                        <motion.path
                            d={path}
                            stroke="currentColor"
                            key={index}
                            animate={{
                                opacity: [0.5, 1],
                            }}
                            transition={{
                                duration: duration,
                                repeat: Infinity,
                                ease: "easeIn",
                                delay: -delay,
                            }}
                        />
                    );
                })}
            </g>
            <defs>
                <clipPath id="clip0_12080_24128">
                    <rect width="110" height="117" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
