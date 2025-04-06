"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import { SCREEN_NAMES } from "@/src/constants/screenNames";
import { useScreenSize } from "@/src/hooks/useScreenSize";

import { IconCloseX } from "../../shared/Icons/IconCloseX";
import { Button } from "../../shared/Button";
import { BgImagesMobile } from "../../shared/Modals/modalBgImages/contentModals/BgImagesMobile";
import { BgImagesTablet } from "../../shared/Modals/modalBgImages/contentModals/BgImagesTablet";
import { BgImagesDesktop } from "../../shared/Modals/modalBgImages/contentModals/BgImagesDesktop";

interface GreetingModalProps {
    onCloseModal: () => void;
}

export const GreetingModal = ({ onCloseModal }: GreetingModalProps) => {
    const getTranslation = useTranslations("EventsPage.Easter");
    const screenSizeName = useScreenSize();
    const { mobileName } = SCREEN_NAMES;

    const modalTranslate = screenSizeName === mobileName ? "0%" : "-50%";
    return (
        <motion.div
            aria-label="modal-backdrop"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
                hidden: {
                    opacity: 0,
                },
                visible: {
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                        delayChildren: 0.3,
                    },
                },
            }}
            onClick={onCloseModal}
            className="fixed no-doc-scroll z-[21] top-0 left-0 w-full h-[100dvh] bg-greyLight bg-opacity-70 dark:bg-backdrop dark:bg-opacity-80 "
        >
            <motion.div
                initial={{
                    scale: 0,
                    translateX: "-50%",
                    translateY: modalTranslate,
                }}
                animate={{
                    scale: 1,
                    translateX: "-50%",
                    translateY: modalTranslate,
                    transition: {
                        type: "spring",
                    },
                }}
                exit={{
                    scale: 0,
                    translateX: "-50%",
                    translateY: modalTranslate,
                }}
                aria-label="modal-window"
                onClick={e => e.stopPropagation()}
                className="w-full tab:w-unset min-w-[320px] max-w-[360px] tab:min-w-[660px] pc:min-w-[750px] desk:min-w-[850px] bg-white-100 dark:bg-purple-400 fixed top-7 tab:top-1/2 left-1/2"
            >
                <div className=" overflow-hidden relative w-full h-auto px-[24px] tab:px-[24px] pc:px-[60px] pt-[72px] tab:pt-[42px] pc:pt-[46px] desk:pt-[37px] pb-[64px] pc:pb-[72px]">
                    <button
                        type="button"
                        onClick={onCloseModal}
                        aria-label="close button"
                        className="cursor-pointer flex justify-center items-center absolute top-2 right-4 pc:top-3 pc:right-3 p-3 disabled:text-purple-200
                         dark:disabled:text-purple-200 bg-transparent enabled:icon-hover-rounded-purple "
                    >
                        <IconCloseX className="stroke-2 size-6" />
                    </button>
                    <BgImagesMobile />
                    <BgImagesTablet />
                    <BgImagesDesktop />
                    <Image
                        src="/images/easter/branchesBouquet.svg"
                        alt="Bouquet of willow branches"
                        width={179}
                        height={169}
                        className="absolute w-[87px] tab:w-[108px] pc:w-[121px] desk:w-[150px] top-[-12px] tab:top-[-20px] left-[-12px] tab:left-[-20px] rotate-[147deg]"
                    />
                    <Image
                        src="/images/easter/branchesBouquet.svg"
                        alt="Bouquet of willow branches"
                        width={179}
                        height={169}
                        className="hidden tab:block absolute tab:w-[122px] desk:w-[178px] pc:w-[147px] bottom-[-20px] pc:bottom-[-30px] right-[-30px] desk:right-[-40px]"
                    />
                    <Image
                        src="/images/easter/bunny.svg"
                        alt="bunny"
                        width={73}
                        height={93}
                        className=" absolute bottom-0 left-1/2 tab:left-[56px] desk:left-[70px] -translate-x-1/2 w-[52px] tab:w-[57px] pc:w-[62px] desk:w-[73px] h-auto"
                    />
                    <div className="  mb-[18px] tab:mb-0">
                        <div className="flex gap-5 pc:gap-10 items-end justify-center tab:mb-4 pc:mb-3 desk:mb-7">
                            <p className="mb-8 tab:mb-[37px] text-4xl tab:text-6xl font-caviar font-bold uppercase">
                                {getTranslation("greetingTitle")}
                            </p>
                            <Image
                                src="/images/easter/bunnyWithEgg.svg"
                                alt="Bunny with egg"
                                width={99}
                                height={193}
                                className="w-[64px] h-auto tab:w-[99px]"
                            />
                        </div>

                        <p className="text-center text-base tab:text-lg pc:text-xl desk:text-2xl mx-auto font-caviar font-bold mb-9 tab:mb-10 pc:mb-[37px]">
                            {getTranslation.rich("greetingText", {
                                upper: chunk => (
                                    <span className=" uppercase">{chunk}</span>
                                ),
                            })}
                        </p>
                        <p className="mb-[46px] tab:mb-[37px] pc:mb-[25px] desk:mb-[15px] desk:text-lg text-redLight dark:text-red text-center lowercase">
                            {getTranslation("greentingCaption")}
                        </p>

                        <div className="flex justify-center">
                            <Button
                                color="grey"
                                onClick={onCloseModal}
                                className=" lowercase"
                            >
                                {getTranslation("greetingBtn")}
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
