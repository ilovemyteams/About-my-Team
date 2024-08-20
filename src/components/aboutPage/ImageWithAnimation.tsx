"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { IconUp } from "../shared/Icons/IconUp";

const ImageWithAnimation = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [contentHidden, setContentHidden] = useState(false);
    const [pointerEvents, setPointerEvents] = useState<"auto" | "none">("auto");

    const handleClick = () => {
        setContentHidden(true);
        setTimeout(() => {
            setIsClicked(true);
            setPointerEvents("none");
        }, 500);
    };

    const getTranslation = useTranslations("AboutPage");

    const fragments = Array.from({ length: 16 });

    return (
        <div
            className="absolute z-10 inset-0 flex justify-center items-center"
            style={{ pointerEvents }}
        >
            <div className="relative w-[720px]">
                <div className="relative mx-auto min-w-[288px] max-w-[720px] min-h-[162px] max-h-[405px] aspect-[288/162] overflow-hidden">
                    {!isClicked ? (
                        <motion.div className="relative dark:bg-PresentationGradient bg-PresentationGradientLigth min-w-[288px] max-w-[720px] min-h-[162px] max-h-[405px] aspect-[288/162] cursor-pointer">
                            <Image
                                src="/images/imageForSharing.jpeg"
                                alt="Presentation"
                                layout="fill"
                                objectFit="cover"
                                className="relative z-[-1] aspect-[288/162]"
                            />
                            <motion.p
                                className="hidden text-purple-200 dark:text-grey tab:block tab:absolute z-20 top-[109px]  text-4xl font-caviar left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                                animate={{ opacity: contentHidden ? 0 : 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {getTranslation("learnMoreAboutUs")}
                            </motion.p>
                            <motion.button
                                aria-label="play button"
                                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 tab:translate-y-0 ]
                w-[64px] h-[64px] p-3 rounded-full after:content-[''] after:absolute after:top-0 after:left-0 
                after:z-[-10] after:w-[64px] after:h-[64px] after:rounded-full after:bg-purple-100 
                after:bg-opacity-40 after:blur-[2px] outline-none rotate-90 dark:pc:hover:text-red pc:hover:text-redLight
                    dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300 dark:active:text-red active:text-redLight"
                                animate={{ opacity: contentHidden ? 0 : 1 }}
                                transition={{ duration: 0.5 }}
                                onClick={handleClick}
                            >
                                <IconUp />
                            </motion.button>
                        </motion.div>
                    ) : (
                        fragments.map((_, index) => (
                            <motion.div
                                key={index}
                                className="absolute w-1/4 h-1/4"
                                initial={{ x: 0, y: 0, opacity: 1 }}
                                animate={{
                                    opacity: 0,
                                    x: (Math.random() - 0.5) * 600,
                                    y: (Math.random() - 0.5) * 600,
                                    rotate: Math.random() * 360,
                                }}
                                transition={{ duration: 3 }}
                                style={{
                                    backgroundImage: `url('/images/team.png')`,
                                    backgroundSize: "400% 400%",
                                    backgroundPosition: `${(index % 4) * 100}% ${
                                        Math.floor(index / 4) * 100
                                    }%`,
                                    top: `${Math.floor(index / 4) * 25}%`,
                                    left: `${(index % 4) * 25}%`,
                                }}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageWithAnimation;
