import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, useEffect } from "react";

import { SCREEN_NAMES } from "@/src/constants/screenNames";
import { useScreenSize } from "@/src/hooks/useScreenSize";

import { IconCloseX } from "../Icons/IconCloseX";

interface ModalBaseProps {
    isOpen: boolean;
    onCloseModal: () => void;
    widthStyle?: string;
    isCloseDisabled?: boolean;
    className?: string;
}

export const ModalBase = ({
    isOpen,
    onCloseModal,
    widthStyle,
    isCloseDisabled = false,
    className = "",
    children,
}: PropsWithChildren<ModalBaseProps>) => {
    const screenSizeName = useScreenSize();
    const { mobileName } = SCREEN_NAMES;

    const modalTranslate = screenSizeName === mobileName ? "0%" : "-50%";

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onCloseModal();
            }
        };

        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const defaultWidth =
        " w-full tab:w-unset min-w-[320px] max-w-[360px] tab:min-w-[660px] pc:min-w-[750px]";

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
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
                                duration: 0.3,
                            },
                        },
                    }}
                    aria-label="modal-backdrop"
                    onClick={onCloseModal}
                    className="fixed z-[20] no-doc-scroll top-0 left-0 w-full h-full bg-greyLight bg-opacity-70 dark:bg-backdrop dark:bg-opacity-80"
                >
                    <motion.div
                        variants={{
                            hidden: {
                                x: "-50%",
                                y: "100vh",
                            },
                            visible: {
                                x: "-50%",
                                y: modalTranslate,
                                transition: {
                                    type: "tween",
                                },
                            },
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        aria-label="modal-window"
                        onClick={e => e.stopPropagation()}
                        className={`max-h-[90dvh] overflow-y-auto scroll bg-white-100 dark:bg-purple-400 fixed top-7 tab:top-1/2 left-1/2 
            -translate-x-1/2 tab:-translate-y-1/2 z-[21] ${widthStyle || defaultWidth} ${className}`}
                    >
                        <div className="relative w-full h-auto px-[16px] tab:px-[24px] pc:px-[60px] py-[64px] pc:py-[72px]">
                            <button
                                type="button"
                                onClick={onCloseModal}
                                disabled={isCloseDisabled}
                                aria-label="close button"
                                className="cursor-pointer flex justify-center items-center absolute top-2 right-4 pc:top-3 pc:right-3 p-3 disabled:text-purple-strokeLight
                         dark:disabled:text-purple-stroke bg-transparent enabled:icon-hover-rounded-purple z-[25] "
                            >
                                <IconCloseX />
                            </button>
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
