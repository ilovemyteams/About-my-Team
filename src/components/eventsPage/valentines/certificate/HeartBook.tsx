"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function HeartBook() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidenText, setIsHidenText] = useState(false);
    const [isIndex, setIsIndex] = useState(false);
    const getTranslation = useTranslations("Valentines");

    const getSertificate = () => {
        setTimeout(() => {
            setIsOpen(true);
        }, 1000);
        setTimeout(() => {
            setIsHidenText(true);
        }, 1500);
        setTimeout(() => {
            setIsIndex(true);
        }, 1800);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-pink-100">
            <div className="relative w-64 h-64 tab:w-[430px] tab:h-[350px]">
                {/* Це буде клік на сертифікат */}
                <button
                    onClick={getSertificate}
                    className="absolute top-0 left-0 p-2 bg-pink-500 text-white z-20"
                >
                    {isOpen ? "Є" : "Отримати сертифікат"}
                </button>
                {/* Це сам компонент. Те що вище не треба. Знаю ти здогадаєшся, але так швидше */}
                <div className="relative w-full h-full mt-12">
                    <div className=" absolute w-[50%] h-full right-[50%] origin-left z-[1]">
                        <div className="">
                            <div className=" overflow-hidden">
                                <div className="content w-[200%]">
                                    <Image
                                        src="/images/valen/fullHeart.svg"
                                        alt="fullHeart"
                                        width={582}
                                        height={458}
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                            <motion.div
                                className="tab:hidden absolute top-[20%] left-6 text-xl font-bold text-white z-[2] overflow-hidden"
                                animate={{
                                    width: isHidenText ? 204 : 107,
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                            >
                                <div>
                                    <p className="w-[204px] text-center font-caviar font-bold text-sm">
                                        {getTranslation("confirmationGreeting")}
                                    </p>
                                    <p className="w-12 ml-[78px] text-center font-caviar font-bold text-3xl mt-2">
                                        50$
                                    </p>
                                    <p className="w-[160px] ml-[22px] text-xxs text-center">
                                        {getTranslation("confirmationFootnote")}
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                className=" hidden tab:block absolute top-[95px] left-10 text-xl font-bold text-white z-[2] overflow-hidden"
                                animate={{
                                    width: isHidenText ? 347 : 160,
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                            >
                                <div>
                                    <p className="w-[347px] text-center font-caviar font-bold tab:text-xl">
                                        {getTranslation("confirmationGreeting")}
                                    </p>
                                    <p className="w-28 ml-[117px] text-center font-caviar font-bold text-7xl mt-4">
                                        50$
                                    </p>
                                    <p className="w-[212px] mt-4 ml-[68px] text-sm text-center">
                                        {getTranslation("confirmationFootnote")}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        className={`absolute w-[50%] h-full right-[50%] origin-right  ${isIndex ? "z-[0]" : "z-[3]"} `}
                        animate={{
                            rotateY: isOpen ? 180 : 0,
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                        }}
                    >
                        <div>
                            <div className="outer overflow-hidden">
                                <div className=" w-[200%]">
                                    <Image
                                        src="/images/valen/fullHeart.svg"
                                        alt="fullHeart"
                                        width={582}
                                        height={458}
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {/* Далі зайве */}
            </div>
        </div>
    );
}
