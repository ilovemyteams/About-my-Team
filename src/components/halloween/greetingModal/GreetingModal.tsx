"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

import { SCREEN_NAMES } from "@/src/constants/screenNames";
import { useScreenSize } from "@/src/hooks/useScreenSize";

import { Button } from "../../shared/Button";
import { IconCloseX } from "../../shared/Icons/IconCloseX";
import { Background } from "./Background";
import { Decoration } from "./Decoration";

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
            className="fixed z-[21] no-doc-scroll top-0 left-0 w-full h-[100dvh] bg-greyLight bg-opacity-70 dark:bg-backdrop dark:bg-opacity-80 "
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
                className="w-full tab:w-unset min-w-[320px] max-w-[360px] tab:min-w-[660px] pc:min-w-[750px] bg-white-100 dark:bg-purple-400 fixed top-7 tab:top-1/2 left-1/2"
            >
                <div className=" overflow-hidden relative w-full h-auto px-[24px] tab:px-[24px] pc:px-[60px] pt-[181px] tab:pt-[219px] pb-[64px] pc:pb-[72px]">
                    <Background />
                    <Decoration />
                    <button
                        type="button"
                        onClick={onCloseModal}
                        aria-label="close button"
                        className="cursor-pointer flex justify-center items-center absolute top-2 right-4 pc:top-3 pc:right-3 p-3 disabled:text-purple-strokeLight
                         dark:disabled:text-purple-stroke bg-transparent enabled:icon-hover-rounded-purple "
                    >
                        <IconCloseX />
                    </button>
                    <div className="text-center whitespace-pre-wrap">
                        <p className="mb-[18px] tab:mb-4 pc:mb-3 text-base tab:text-lg pc:text-xl font-caviar font-bold">
                            {getTranslation("greeting")}
                        </p>
                        <p className=" text-redLight dark:text-red mb-11 tab:mb-9 pc:mb-6 text-sm tab:text-base max-w-[80%] mx-auto">
                            {getTranslation("caption")}
                        </p>
                        <Button color="grey" onClick={onCloseModal}>
                            {getTranslation("btn")}
                        </Button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
