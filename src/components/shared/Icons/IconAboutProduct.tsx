import { motion } from "framer-motion";

import { IconProps } from "@/types/iconProps.interface";

export const IconAboutProduct = ({ className }: IconProps) => {
    return (
        <motion.svg
            viewBox="0 0 360 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="icon about product"
            preserveAspectRatio="xMidYMid meet"
            style={{ overflow: "visible" }}
        >
            <motion.g
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, -90, -270, -360] }}
                transition={{
                    duration: 2,
                    ease: "linear",
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
                style={{ originX: "center", originY: "center" }}
            >
                <path
                    d="M44.5029 180.5C44.7734 254.988 105.449 315.5 180 315.5V315.499C201.182 315.537 222.071 310.594 240.981 301.072L241.88 300.615C261.026 290.795 277.549 276.54 290.071 259.041L290.638 258.25H270.5V236.75H325.75V292H304.25V275.923L303.356 277.06C273.908 314.56 228.839 337 180 337C93.5929 337 23.2735 266.845 23.0029 180.5H44.5029Z"
                    stroke="currentColor"
                />
            </motion.g>

            <path
                d="M256.759 135.286V224.684L179.999 269.42L103.248 224.694V135.311L180.116 92.1039L256.759 135.286ZM235.997 159.814L190.997 186.116L190.75 186.261V240.103L191.502 239.662L236.502 213.361L236.75 213.215V159.373L235.997 159.814ZM179.872 113.834L134.614 140.193L133.871 140.625L134.614 141.057L179.872 167.405L180.124 167.551L180.376 167.405L225.454 141.057L226.194 140.625L225.455 140.194L180.376 113.834L180.124 113.687L179.872 113.834ZM169.25 186.125L169.001 185.981L124.001 159.768L123.25 159.33V213.194L123.498 213.338L168.498 239.551L169.25 239.989V186.125Z"
                stroke="currentColor"
            />
            <motion.g
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, -90, -270, -360] }}
                transition={{
                    duration: 2,
                    ease: "linear",
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
                style={{ originX: "center", originY: "center" }}
            >
                <motion.path
                    d="M179.999 22.9999H180C266.407 22.9999 336.726 93.1551 336.997 179.5H315.497C315.227 105.012 254.551 44.4999 180 44.4999C158.818 44.4615 137.929 49.4065 119.019 58.9286L118.12 59.3846C98.9737 69.2054 82.451 83.4596 69.9287 100.959L69.3623 101.75H89.5V123.25H34.25V67.9999H55.75V84.08L56.6436 82.9393C71.0728 64.5279 89.4444 49.5903 110.402 39.2216L111.402 38.7313C132.442 28.5078 155.503 23.1354 178.886 23.0028L179.999 22.9999Z"
                    stroke="currentColor"
                />
            </motion.g>
        </motion.svg>
    );
};
