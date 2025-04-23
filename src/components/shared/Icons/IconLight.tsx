"use client";

import { motion } from "framer-motion";

import { IconProps } from "@/types/iconProps.interface";

const pathes = [
    "M89 231L64 256",
    "M61 146H31",
    "M94 77L69 52",
    "M180 43V13",
    "M266 77L291 52",
    "M299.5 146H329.5",
    "M272 231L297 256",
];

export const IconLight = ({ className }: IconProps) => {
    return (
        <svg
            viewBox="0 0 360 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="light icon"
            preserveAspectRatio="xMidYMid meet"
        >
            <path
                d="M145.715 287.001H214.304M180.001 85.7149C197.406 85.7042 214.304 91.5799 227.948 102.387C241.591 113.194 251.179 128.298 255.153 145.243C259.128 162.189 257.255 179.98 249.838 195.727C242.422 211.473 229.899 224.249 214.304 231.978V260.001H145.715V231.978C130.122 224.249 117.599 211.475 110.183 195.731C102.767 179.986 100.892 162.196 104.864 145.252C108.836 128.307 118.421 113.204 132.062 102.395C145.703 91.5865 162.597 85.7081 180.001 85.7149Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {pathes.map((path, index) => (
                <motion.path
                    key={index}
                    d={path}
                    stroke="currentColor"
                    initial={{ pathLength: 0.5 }}
                    whileInView={{
                        pathLength: [0.5, 0.8, 1, 1, 1, 1, 0.8, 0.5],
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.5 * index,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 4,
                    }}
                />
            ))}
        </svg>
    );
};
