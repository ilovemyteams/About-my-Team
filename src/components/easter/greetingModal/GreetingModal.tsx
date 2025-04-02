"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { SCREEN_NAMES } from "@/src/constants/screenNames";
import { useScreenSize } from "@/src/hooks/useScreenSize";
import { parseTextWithLink } from "@/src/utils/parseTextWithLink";

// import { Button } from "../../shared/Button";
import { IconCloseX } from "../../shared/Icons/IconCloseX";
import { IconHeroLogo } from "../../shared/Icons/IconHeroLogo";
import { IconArrowCoffee } from "./IconArrowCoffee";
import happy from "@/src/assets/images/happy.png";

interface GreetingModalProps {
    onCloseModal: () => void;
}
const BUY_ME_COFFEE = "https://www.buymeacoffee.com/susanna.salata";

export const GreetingModal = ({ onCloseModal }: GreetingModalProps) => {
    const getTranslation = useTranslations("EventsPage.Easter");
    const screenSizeName = useScreenSize();
    const { mobileName } = SCREEN_NAMES;
    const locale = useLocale();

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
                className="w-full tab:w-unset min-w-[320px] max-w-[360px] tab:min-w-[660px] pc:min-w-[750px] desk:min-w-[850px] bg-[#D8CDE6] fixed top-7 tab:top-1/2 left-1/2"
            >
                <div className=" overflow-hidden relative w-full h-auto px-[24px] tab:px-[24px] pc:px-[60px] pt-[214px] tab:pt-[326px] pc:pt-[314px] pb-[155px] tab:pb-[280px] ">
                    {/* <Background />
                    <Decoration /> */}
                    <button
                        type="button"
                        onClick={onCloseModal}
                        aria-label="close button"
                        className="cursor-pointer flex justify-center items-center absolute top-2 right-4 pc:top-3 pc:right-3 p-3 disabled:text-purple-200
                         dark:disabled:text-purple-200 bg-transparent enabled:icon-hover-rounded-purple "
                    >
                        <IconCloseX className="stroke-2 size-5 text-purple-200" />
                    </button>
                    <Image
                        src={happy}
                        alt="Happy"
                        width={750}
                        height={366}
                        className="absolute top-[26px] tab:top-0 left-0 desk:left-[50px]"
                    />
                    <Image
                        src="/images/susanna/bday.png"
                        alt="birthday"
                        width={750}
                        height={302}
                        className="absolute bottom-0 left-0 desk:left-[50px]"
                    />
                    <div className="tab:flex tab:gap-[89px] pc:gap-[121px] desk:gap-[170px]">
                        <div className=" text-purple-200 mb-[30px] tab:w-[262px]">
                            <p className="mb-[18px] tab:mb-4 text-base tab:text-2xl font-comfortaa">
                                {parseTextWithLink(
                                    getTranslation("greetingTitle"),
                                    locale
                                )}
                            </p>

                            <p className="text-justify desk:text-lg25 text-base23 tab:text-xl mx-auto font-comfortaa  mb-4">
                                {getTranslation("greetingText")}
                            </p>

                            {/* <Button color="grey" onClick={onCloseModal}>
                            {getTranslation("btn")}
                        </Button> */}
                            <IconHeroLogo className="text-purple-200 w-[102px] h-auto " />
                        </div>
                        <div className="hidden tab:block tab:mt-[34px] relative">
                            <p className="text-purple-200 font-segoe font-bold text-xl italic block text-center tab:mb-6">
                                {getTranslation("captionBig")}
                            </p>
                            <a
                                href={BUY_ME_COFFEE}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/images/susanna/qr-code.png"
                                    alt="QR-code"
                                    width={129}
                                    height={129}
                                />
                            </a>

                            <IconArrowCoffee className="absolute tab:top-10 tab:right-0" />
                        </div>

                        <a
                            href={BUY_ME_COFFEE}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-200 font-segoe font-bold text-xl italic underline block text-center tab:hidden"
                        >
                            {getTranslation("caption")}
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
