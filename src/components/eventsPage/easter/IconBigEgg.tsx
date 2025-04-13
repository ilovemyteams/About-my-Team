import { motion } from "framer-motion";

import { IconProps } from "@/types/iconProps.interface";

import { pathes } from "./bigEggPathes";

interface IconBigEggProps extends IconProps {
    isAnimated: boolean;
}

export const IconBigEgg = ({ className, isAnimated }: IconBigEggProps) => {
    return (
        <motion.svg
            width="93"
            height="127"
            viewBox="0 0 93 127"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="big easter egg icon"
            preserveAspectRatio="xMidYMax meet"
            style={{ overflow: "visible" }}
        >
            {pathes.map(({ d, fill, xShift, yShift, rotate, delay }, index) => {
                return (
                    <motion.path
                        id={`path${index + 1}`}
                        d={d}
                        fill={fill}
                        key={index}
                        initial={{ x: 0, y: 0, rotate: 0 }}
                        animate={
                            isAnimated
                                ? {
                                      x: xShift,
                                      y: yShift,
                                      rotate: rotate,
                                  }
                                : { x: 0, y: 0, rotate: 0 }
                        }
                        transition={{
                            type: "spring",
                            delay: delay,
                            duration: 1.5,
                            ease: "easeInOut",
                        }}
                    />
                );
            })}
        </motion.svg>
    );
};
