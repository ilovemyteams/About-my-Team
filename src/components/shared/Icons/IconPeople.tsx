"use client";
import { motion } from "framer-motion";

import { IconProps } from "@/types/iconProps.interface";

export const IconPeople = ({ className }: IconProps) => {
    return (
        <motion.svg
            viewBox="0 0 216 216"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="group of people icon"
            preserveAspectRatio="xMidYMid meet"
        >
            <motion.g
                initial={{ scale: 1 }}
                animate={{ scale: [1, 0.94, 0.87, 0.94, 1, 1, 1] }}
                transition={{
                    duration: 2,
                    delay: 2,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 2,
                }}
            >
                <circle
                    cx="95.9047"
                    cy="67.6469"
                    r="33.7534"
                    stroke="currentColor"
                    strokeWidth="0.661832"
                />
                <path
                    d="M170.03 195.269H23.7581L28.155 142.623L28.2174 142.382L28.2176 142.381C29.6439 136.808 32.456 131.687 36.3925 127.492C40.329 123.298 45.2621 120.167 50.7332 118.39L50.7341 118.39L60.2645 115.263L60.2656 115.263C61.7963 114.755 63.3336 114.283 64.8774 113.847L64.8775 113.847C69.8854 112.433 74.7589 114.105 78.2748 116.435C82.1082 118.978 88.4261 122.11 96.2378 122.11C104.049 122.11 110.377 118.978 114.201 116.435C117.717 114.105 122.59 112.443 127.599 113.848C129.143 114.283 130.683 114.755 132.22 115.263L132.221 115.263L141.741 118.39L141.742 118.39C147.214 120.167 152.147 123.298 156.083 127.492C160.02 131.687 162.832 136.808 164.258 142.381L164.258 142.382L164.322 142.626L170.03 195.269Z"
                    stroke="currentColor"
                    strokeWidth="0.661832"
                />
            </motion.g>
            <motion.g
                style={{ originX: 0 }}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1, 1, 1.11, 1.22, 1.11, 1] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 2,
                }}
            >
                <path
                    d="M139.789 108.927C145.402 108.927 149.955 106.676 152.711 104.843C155.301 103.126 158.916 101.885 162.646 102.931C163.772 103.249 164.895 103.592 166.016 103.963L172.935 106.236C176.95 107.539 180.57 109.837 183.458 112.915C186.347 115.993 188.411 119.751 189.457 123.84L189.508 124.035L195.002 157.8H172.935"
                    stroke="currentColor"
                    strokeWidth="0.481"
                />

                <path
                    d="M139.547 94.3555C153.228 94.3555 164.318 83.2649 164.318 69.584C164.318 55.9031 153.228 44.8125 139.547 44.8125"
                    stroke="currentColor"
                    strokeWidth="0.481"
                />
            </motion.g>
        </motion.svg>
    );
};
