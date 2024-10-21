"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

import { SCREEN_NAMES } from "@/src/constants/screenNames";
import { useScreenSize } from "@/src/hooks/useScreenSize";

import { IconCloseX } from "../../shared/Icons/IconCloseX";
import { BgImagesDesktop } from "../../shared/ModalsWithForm/modalBgImages/formModalBgImages/BgImagesDesktop";
import { BgImagesMobile } from "../../shared/ModalsWithForm/modalBgImages/formModalBgImages/BgImagesMobile";
import { BgImagesTablet } from "../../shared/ModalsWithForm/modalBgImages/formModalBgImages/BgImagesTablet";

interface GreetingModalProps {
    onCloseModal: () => void;
}

export const GreetingModal = ({ onCloseModal }: GreetingModalProps) => {
    const getTranslation = useTranslations("Halloween");
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
            className="fixed z-[21] no-doc-scroll top-0 left-0 w-full h-full bg-greyLight bg-opacity-70 dark:bg-backdrop dark:bg-opacity-80 "
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
                className="max-h-[90dvh] overflow-y-auto scroll w-full tab:w-unset min-w-[320px] max-w-[360px] tab:min-w-[660px] pc:min-w-[750px] bg-white-100 dark:bg-purple-400 fixed top-7 tab:top-1/2 left-1/2"
            >
                <div className="relative w-full h-auto px-[16px] tab:px-[24px] pc:px-[60px] py-[64px] pc:py-[72px]">
                    <BgImagesMobile />
                    <BgImagesTablet />
                    <BgImagesDesktop />
                    <button
                        type="button"
                        onClick={onCloseModal}
                        aria-label="close button"
                        className="cursor-pointer flex justify-center items-center absolute top-2 right-4 pc:top-3 pc:right-3 p-3 disabled:text-purple-strokeLight
                         dark:disabled:text-purple-stroke bg-transparent enabled:icon-hover-rounded-purple "
                    >
                        <IconCloseX />
                    </button>
                    <div className="min-h-[350px]">
                        <h3></h3>
                        <p>{getTranslation("greeting")}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
