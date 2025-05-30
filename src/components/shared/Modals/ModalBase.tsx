import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import { SCREEN_NAMES } from "@/src/constants/screenNames";
import { useScreenSize } from "@/src/hooks/useScreenSize";

import { IconCloseX } from "../Icons/IconCloseX";
import { Portal } from "./Portal";

interface ModalBaseProps {
    isOpen: boolean;
    onCloseModal: () => void;
    widthStyle?: string;
    isCloseDisabled?: boolean;
    className?: string;
    animationType?: "tween" | "spring";
    appearance?: "center" | "up";
    isCloseBtnVisible?: boolean;
    isScrollBlock?: boolean;
    mobilePosition?: "center" | "top";
}

export const ModalBase = ({
    isOpen,
    onCloseModal,
    widthStyle,
    isCloseDisabled = false,
    className = "",
    animationType = "tween",
    appearance = "up",
    isCloseBtnVisible = true,
    children,
    isScrollBlock = false,
    mobilePosition = "top",
}: PropsWithChildren<ModalBaseProps>) => {
    const [isOpenPortal, setIsOpenPortal] = useState(false);
    const screenSizeName = useScreenSize();
    const { mobileName } = SCREEN_NAMES;

    const modalMobileTranslate = mobilePosition === "top" ? "0%" : "-50%";
    const modalTranslate =
        screenSizeName === mobileName ? modalMobileTranslate : "-50%";

    const scrollStyle = "overflow-y-auto scroll";
    const mobilePositionStyle = mobilePosition === "top" ? "top-7" : "top-1/2";

    const onClosePortal = () => {
        setIsOpenPortal(false);
    };

    useEffect(() => {
        if (isOpen) {
            setIsOpenPortal(true);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClosePortal();
            }
        };

        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const defaultWidth =
        "w-full tab:w-unset min-w-[320px] max-w-[360px] tab:min-w-[660px] pc:min-w-[750px] desk:min-w-[850px]";

    const centerAnimation =
        appearance === "center"
            ? {
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
              }
            : {
                  hidden: {},
                  visible: {},
              };

    return (
        <AnimatePresence
            onExitComplete={() => {
                onCloseModal();
            }}
        >
            {isOpenPortal ? (
                <Portal id="modal">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.8 }}
                        variants={{
                            hidden: {
                                opacity: 0,
                                transition: {
                                    duration: 0.5,
                                },
                            },
                            visible: {
                                opacity: 1,
                                transition: {
                                    duration: 0.5,
                                },
                            },
                        }}
                        aria-label="modal-backdrop"
                        onClick={onClosePortal}
                        className="fixed no-doc-scroll z-[21] top-0 left-0 w-full h-full bg-greyLight bg-opacity-70 dark:bg-backdrop dark:bg-opacity-80"
                    >
                        <motion.div
                            variants={{
                                hidden: {
                                    x: "-50%",
                                    y: "100vh",
                                    ...centerAnimation.hidden,
                                    transition: {
                                        duration: 0.5,
                                    },
                                },
                                visible: {
                                    x: "-50%",
                                    y: modalTranslate,
                                    ...centerAnimation.visible,
                                    transition: {
                                        delay: 0.2,
                                        duration: 0.5,
                                    },
                                },
                            }}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ type: animationType }}
                            aria-label="modal-window"
                            onClick={e => e.stopPropagation()}
                            className={twMerge(
                                "max-h-[90dvh] bg-white-100 dark:bg-purple-400 fixed tab:top-1/2 left-1/2 -translate-x-1/2 tab:-translate-y-1/2",
                                isScrollBlock ? "" : scrollStyle,
                                mobilePositionStyle,
                                widthStyle || defaultWidth,
                                className
                            )}
                        >
                            <div className="relative w-full overflow-clip h-auto px-[16px] tab:px-[24px] pc:px-[60px] py-[64px] pc:py-[72px]">
                                {isCloseBtnVisible && (
                                    <button
                                        type="button"
                                        onClick={onClosePortal}
                                        disabled={isCloseDisabled}
                                        aria-label="close button"
                                        className="cursor-pointer flex justify-center items-center absolute top-2 right-4 pc:top-3 pc:right-5 p-3 disabled:text-purple-strokeLight
                         dark:disabled:text-purple-stroke bg-transparent enabled:icon-hover-rounded-purple z-[2]"
                                    >
                                        <IconCloseX className="stroke-2 size-6" />
                                    </button>
                                )}
                                {children}
                            </div>
                        </motion.div>
                    </motion.div>
                </Portal>
            ) : null}
        </AnimatePresence>
    );
};
