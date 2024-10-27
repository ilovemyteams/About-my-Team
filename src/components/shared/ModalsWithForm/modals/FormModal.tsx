"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
    ComponentType,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from "react";

import { SCREEN_NAMES } from "@/src/constants/screenNames";
import { useScreenSize } from "@/src/hooks/useScreenSize";
import {
    FormInModalProps,
    TriggerComponentProps,
} from "@/types/FormInModalProps";
import { SubmitFnType } from "@/types/FormInModalProps";

import { IconBat } from "../../Icons/IconBat";
import { IconBottomWeb } from "../../Icons/IconBottomWeb";
import { IconCloseX } from "../../Icons/IconCloseX";
import { IconTopWeb } from "../../Icons/IconTopWeb";
import { IconTree } from "../../Icons/IconTree";
import { BgImagesDesktop } from "../modalBgImages/formModalBgImages/BgImagesDesktop";
import { BgImagesMobile } from "../modalBgImages/formModalBgImages/BgImagesMobile";
import { BgImagesTablet } from "../modalBgImages/formModalBgImages/BgImagesTablet";

interface FormModalProps {
    isError: boolean;
    setIsError: Dispatch<SetStateAction<boolean>>;
    setIsNotificationShawn: Dispatch<SetStateAction<boolean>>;
    formComponent: ComponentType<FormInModalProps>;
    triggerComponent: ComponentType<TriggerComponentProps>;
    className?: string;
}

export const FormModal = ({
    isError,
    setIsError,
    setIsNotificationShawn,
    formComponent: FormComponent,
    triggerComponent: TriggerComponent,
    className,
}: FormModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onOpenModal = () => setIsModalOpen(true);
    const onCloseModal = () => setIsModalOpen(false);
    const screenSizeName = useScreenSize();
    const { mobileName } = SCREEN_NAMES;

    const modalTranslate = screenSizeName === mobileName ? "0%" : "-50%";

    const notificationHandler = async (submitFn: SubmitFnType) => {
        try {
            await submitFn();
            onCloseModal();
        } catch (error) {
            setIsError(true);
            throw new Error("Form submission failed", { cause: error });
        } finally {
            setIsNotificationShawn(true);
        }
    };

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
    }, []);

    const darkColorIcons =
        "text-disabledLight opacity-40 dark:opacity-100 dark:text-black";

    return (
        <div className={className}>
            <TriggerComponent
                modalOpenHandler={onOpenModal}
                isModalOpen={isModalOpen}
            />
            <AnimatePresence>
                {isModalOpen && (
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
                                    duration: 0.5,
                                    delayChildren: 0.3,
                                },
                            },
                        }}
                        aria-label="modal-backdrop"
                        onClick={onCloseModal}
                        className="fixed z-[22] no-doc-scroll top-0 left-0 w-full h-full bg-greyLight bg-opacity-70 dark:bg-backdrop dark:bg-opacity-80"
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
                            className="max-h-[90dvh] overflow-y-auto scroll w-full tab:w-unset min-w-[320px] max-w-[360px] tab:min-w-[660px] pc:min-w-[750px] bg-white-100 dark:bg-purple-400 fixed top-7 tab:top-1/2 left-1/2 z-[25]"
                        >
                            <div className="relative w-full h-auto px-[16px] tab:px-[24px] pc:px-[60px] py-[64px] pc:py-[72px] overflow-hidden">
                                <BgImagesMobile />
                                <BgImagesTablet />
                                <BgImagesDesktop />
                                <IconTree
                                    className={`absolute top-0 right-[-40%] tab:right-0 ${darkColorIcons}`}
                                />
                                <IconTree
                                    className={`absolute bottom-[-63%] left-0 tab:right-0 scale-x-[-1] rotate-[-29deg] ${darkColorIcons}`}
                                />
                                <IconBat
                                    className={`absolute top-[180px] tab:top-[145px] right-[25px] ${darkColorIcons}`}
                                />
                                <IconBat
                                    className={`absolute w-[75px] h-[57px] bottom-[120px] right-[5px] tab:bottom-[7%] tab:right-[17%] rotate-[40deg] ${darkColorIcons}`}
                                />
                                <IconTopWeb
                                    className={`absolute top-[-5%] tab:top-[-4%] pc:top-[-2%] left-0 w-[139px] pc:w-[259px] scale-35`}
                                />
                                <IconBottomWeb
                                    className={`absolute bottom-0 right-0 `}
                                />
                                <button
                                    type="button"
                                    onClick={onCloseModal}
                                    disabled={isError}
                                    aria-label="close button"
                                    className="cursor-pointer flex justify-center items-center absolute top-2 right-4 pc:top-3 pc:right-3 p-3 disabled:text-purple-strokeLight
                         dark:disabled:text-purple-stroke bg-transparent enabled:icon-hover-rounded-purple z-[25] "
                                >
                                    <IconCloseX />
                                </button>
                                <FormComponent
                                    notificationHandler={notificationHandler}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
