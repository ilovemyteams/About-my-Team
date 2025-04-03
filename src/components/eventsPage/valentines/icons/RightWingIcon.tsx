"use client";
import { motion } from "framer-motion";

import { IconProps } from "@/types/iconProps.interface";

export const RightWingIcon = ({ className }: IconProps) => {
    return (
        <motion.svg
            width="125"
            height="151"
            viewBox="0 0 125 151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="right wing icon"
            initial={{ rotate: "-5deg", x: "-15%" }}
            animate={{
                rotate: ["5deg", "-5deg", "5deg"],
                x: ["-15%", "-15%", "-15%"],
                transition: {
                    duration: 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                },
            }}
        >
            <path
                d="M4.27696 112.622C15.1803 116.849 25.0474 117.837 34.1905 117.709C28.5271 116.874 22.1284 115.83 14.888 114.536L15.5983 105.493C19.5455 106.561 23.3229 107.251 26.9545 107.637L25.8846 101.951C43.4014 102.268 56.0444 96.4633 67.4333 90.9999C58.9917 93.4124 47.7107 96.0507 32.4237 99.0234L29.5989 90.2602C31.5081 90.0661 33.3578 89.7999 35.1424 89.4761L31.6782 83.9845C33.5415 83.359 35.3192 82.6848 37.0209 81.9821L29.3349 71.7248C59.8444 56.6779 62.3758 28.8063 82.1615 17.4517C93.8402 10.7553 96.9336 24.7543 85.537 41.4952C88.1241 39.6342 90.8833 38.0531 93.9251 36.8265C107.23 31.5194 107.618 47.0037 91.8746 62.7253C93.0461 62.4198 94.237 62.1547 95.4723 61.956C108.21 59.9142 105.03 72.535 88.0632 82.7948C90.368 82.2854 92.6996 81.9351 95.1219 81.8508C108.497 81.3405 102.951 94.2654 83.2272 102.364C83.1446 102.399 83.0621 102.434 82.9796 102.469C84.7688 102.595 86.571 102.824 88.349 103.21C99.9477 105.677 94.5084 114.534 78.4653 118.598C89.1035 123.023 79.0384 132.296 58.2524 132.889C49.3923 133.14 34.1126 130.65 2.51869 121.503L4.24658 112.61L4.27696 112.622Z"
                fill="white"
            />
            {/* <mask
                id="mask0_16502_31592"
                maskUnits="userSpaceOnUse"
                x="2"
                y="16"
                width="102"
                height="118"
            > */}
            <path
                d="M4.26122 112.956C15.1645 117.183 25.0371 118.157 34.1802 118.029C28.5169 117.194 22.1181 116.15 14.8723 114.87L15.5825 105.828C19.5297 106.896 23.3072 107.585 26.9387 107.972L25.8634 102.3C43.3802 102.616 56.0232 96.8123 67.4067 91.3634C58.965 93.7758 47.684 96.4141 32.397 99.3868L29.5668 90.6382C31.476 90.4441 33.3257 90.1779 35.1103 89.8541L31.6559 84.3827C33.5192 83.7573 35.2914 83.0975 36.9985 82.3803L29.3071 72.1376C59.8264 57.1109 62.3577 29.2393 82.1379 17.8991C93.8166 11.2028 96.9101 25.2018 85.5189 41.9282C88.1006 40.0817 90.8652 38.486 93.907 37.2595C107.212 31.9524 107.6 47.4366 91.8468 63.1381C93.0182 62.8325 94.2092 62.5675 95.4445 62.3687C108.182 60.327 105.002 72.9477 88.0408 83.193C90.3456 82.6836 92.6773 82.3334 95.0996 82.2491C108.475 81.7388 102.928 94.6636 83.1951 102.742C83.1125 102.777 83.03 102.812 82.9475 102.847C84.7368 102.973 86.5389 103.202 88.3169 103.588C99.9156 106.055 94.4763 114.912 78.4332 118.976C89.0562 123.395 79.0117 132.66 58.2257 133.253C49.3657 133.504 34.086 131.013 2.50178 121.887L4.24486 113L4.26122 112.956Z"
                fill="white"
            />
            {/* </mask> */}
            {/* <g mask="url(#mask0_16502_31592)">
             */}
            <g>
                <path
                    d="M82.2054 17.8446C94.5 10.7998 97.294 26.6575 83.6957 44.5098C78.1246 51.8264 67.9572 66.2626 38.7041 84.5145L29.3745 72.083C59.8938 57.0563 62.4252 29.1847 82.2054 17.8446Z"
                    fill="url(#paint0_linear_16502_31592)"
                />
                <path
                    d="M93.961 37.2069C107.514 31.7941 107.676 47.972 91.0116 63.9774C84.1818 70.5399 70.0309 79.2066 37.5312 93.556L31.7001 84.31C64.9417 73.3368 72.1452 45.8944 93.9664 37.1924L93.961 37.2069Z"
                    fill="url(#paint1_linear_16502_31592)"
                />
                <path
                    d="M95.4997 62.3355C108.657 60.2361 104.828 73.7559 86.3667 84.1668C78.79 88.428 64.3192 93.1483 32.4316 99.3624L29.6014 90.6138C61.2961 87.3585 74.3204 65.7294 95.4997 62.3355Z"
                    fill="url(#paint2_linear_16502_31592)"
                />
                <path
                    d="M95.1564 82.2096C108.531 81.6993 102.985 94.6242 83.252 102.702C75.1669 106.01 60.1512 108.953 27.5953 111.272L25.8941 102.284C57.8806 102.866 73.6094 83.0305 95.1413 82.2039L95.1564 82.2096Z"
                    fill="url(#paint3_linear_16502_31592)"
                />
                <path
                    d="M88.3829 103.534C101.557 106.327 92.7669 117.372 71.405 120.283C62.6606 121.472 47.2402 120.601 14.9067 114.854L15.617 105.811C46.6414 114.214 67.1869 99.037 88.3829 103.534Z"
                    fill="url(#paint4_linear_16502_31592)"
                />
                <path
                    d="M77.1296 118.394C89.9441 122.56 79.9179 132.56 58.3038 133.19C49.4438 133.441 34.1641 130.95 2.57983 121.824L4.32292 112.937C34.3163 124.547 56.5169 111.698 77.1448 118.4L77.1296 118.394Z"
                    fill="url(#paint5_linear_16502_31592)"
                />
            </g>
            <path
                d="M17.7125 79.3822C39.1152 69.8108 41.0834 46.2995 57.5687 45.1185C66.4174 44.4823 67.271 54.112 63.7446 61.3351C64.8876 61.1514 66.0793 61.0688 67.3337 61.1423C77.96 61.7698 74.7762 75.4161 67.5556 81.4508C68.0742 81.5461 68.5873 81.656 69.1144 81.8208C79.3341 84.7306 72.2833 97.372 63.5032 101.562C63.4152 101.612 63.3175 101.642 63.2295 101.691C71.3812 105.68 62.994 115.467 54.6609 117.821C48.9652 119.426 38.584 120.083 16.0214 117.657L17.7125 79.3822Z"
                fill="white"
            />
            <mask
                id="mask1_16502_31592"
                maskUnits="userSpaceOnUse"
                x="16"
                y="45"
                width="59"
                height="75"
            >
                <path
                    d="M17.7521 79.801C39.1494 70.2441 41.1262 46.8023 57.5908 45.6301C66.4395 44.9939 67.2834 54.6034 63.7527 61.7917C64.8957 61.608 66.0874 61.5255 67.3418 61.5989C77.9529 62.2208 74.78 75.838 67.5497 81.8525C68.0683 81.9478 68.5814 82.0577 69.0988 82.2022C79.3033 85.1064 72.2688 97.7043 63.4888 101.895C63.4008 101.944 63.303 101.974 63.2151 102.024C71.357 105.992 62.9752 115.765 54.6476 118.104C48.9518 119.709 38.5859 120.372 16.0385 117.951L17.7424 79.7808L17.7521 79.801Z"
                    fill="white"
                />
            </mask>
            <g mask="url(#mask1_16502_31592)">
                <path
                    d="M17.7521 79.801C39.1494 70.2441 41.1262 46.8023 57.5908 45.6301C66.4395 44.9939 67.2834 54.6034 63.7527 61.7917C64.8957 61.608 66.0874 61.5255 67.3418 61.5989C77.9529 62.2208 74.78 75.838 67.5497 81.8525C68.0683 81.9478 68.5814 82.0577 69.0988 82.2022C79.3033 85.1064 72.2688 97.7043 63.4888 101.895C63.4008 101.944 63.303 101.974 63.2151 102.024C71.357 105.992 62.9752 115.765 54.6476 118.104C48.9518 119.709 38.5859 120.372 16.0385 117.951L17.7424 79.7808L17.7521 79.801Z"
                    fill="url(#paint6_linear_16502_31592)"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_16502_31592"
                    x1="88.2747"
                    y1="69.2444"
                    x2="70.6871"
                    y2="25.9517"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#ECB8B8" />
                    <stop offset="0.18" stop-color="#EEC2C2" />
                    <stop offset="0.69" stop-color="#F4DADA" />
                    <stop offset="1" stop-color="#F7E4E4" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_16502_31592"
                    x1="107.611"
                    y1="79.0376"
                    x2="95.1415"
                    y2="49.0513"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#ECB8B8" />
                    <stop offset="0.18" stop-color="#EEC2C2" />
                    <stop offset="0.69" stop-color="#F4DADA" />
                    <stop offset="1" stop-color="#F7E4E4" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_16502_31592"
                    x1="165.144"
                    y1="105.946"
                    x2="157.341"
                    y2="87.4115"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#ECB8B8" />
                    <stop offset="0.18" stop-color="#EEC2C2" />
                    <stop offset="0.69" stop-color="#F4DADA" />
                    <stop offset="1" stop-color="#F7E4E4" />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_16502_31592"
                    x1="190.83"
                    y1="142.997"
                    x2="183.467"
                    y2="124.468"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#ECB8B8" />
                    <stop offset="0.18" stop-color="#EEC2C2" />
                    <stop offset="0.69" stop-color="#F4DADA" />
                    <stop offset="1" stop-color="#F7E4E4" />
                </linearGradient>
                <linearGradient
                    id="paint4_linear_16502_31592"
                    x1="222.125"
                    y1="218.167"
                    x2="211.822"
                    y2="189.285"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#ECB8B8" />
                    <stop offset="0.18" stop-color="#EEC2C2" />
                    <stop offset="0.69" stop-color="#F4DADA" />
                    <stop offset="1" stop-color="#F7E4E4" />
                </linearGradient>
                <linearGradient
                    id="paint5_linear_16502_31592"
                    x1="220.303"
                    y1="262.426"
                    x2="208.717"
                    y2="228.696"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#ECB8B8" />
                    <stop offset="0.18" stop-color="#EEC2C2" />
                    <stop offset="0.69" stop-color="#F4DADA" />
                    <stop offset="1" stop-color="#F7E4E4" />
                </linearGradient>
                <linearGradient
                    id="paint6_linear_16502_31592"
                    x1="28.3291"
                    y1="123.535"
                    x2="63.592"
                    y2="47.0171"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#F3D4D5" />
                    <stop offset="0.35" stop-color="#F4DBDB" />
                    <stop offset="1" stop-color="#F7E4E4" />
                </linearGradient>
            </defs>
        </motion.svg>
    );
};
