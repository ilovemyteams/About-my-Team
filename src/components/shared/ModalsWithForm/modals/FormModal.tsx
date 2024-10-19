"use client";

import {
    ComponentType,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from "react";

import {
    FormInModalProps,
    TriggerComponentProps,
} from "@/types/FormInModalProps";
import { SubmitFnType } from "@/types/FormInModalProps";

import { IconCloseX } from "../../Icons/IconCloseX";
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

    console.log(isModalOpen);

    return (
        <div className={className}>
            <TriggerComponent
                modalOpenHandler={onOpenModal}
                isModalOpen={isModalOpen}
            />
            {isModalOpen && (
                <div
                    aria-label="modal-backdrop"
                    onClick={onCloseModal}
                    className="fixed z-[20] no-doc-scroll top-0 left-0 w-full h-full bg-greyLight bg-opacity-70 dark:bg-backdrop dark:bg-opacity-80"
                >
                    <div
                        aria-label="modal-window"
                        onClick={e => e.stopPropagation()}
                        className="max-h-[90dvh] overflow-y-auto scroll min-w-[320px] max-w-[360px] tab:min-w-[660px] pc:min-w-[750px] bg-white-100 dark:bg-purple-400 fixed top-7 tab:top-1/2 left-1/2 
            -translate-x-1/2 tab:-translate-y-1/2 z-[21]"
                    >
                        <div className="relative w-full h-auto px-[16px] tab:px-[24px] pc:px-[60px] py-[64px] pc:py-[72px]">
                            <BgImagesMobile />
                            <BgImagesTablet />
                            <BgImagesDesktop />
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
                    </div>
                </div>
            )}
            {/* <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement={placement}
                radius="none"
                shouldBlockScroll={
                    screenSizeName !== mobileName &&
                    screenSizeName !== tabletName
                }
                hideCloseButton={true}
                className="top-7 tab:top-0 overflow-y-auto scroll min-w-[320px] max-w-[360px] tab:min-w-[660px] pc:min-w-[750px] bg-white-100 dark:bg-purple-400 no-doc-scroll"
                classNames={{
                    backdrop:
                        "bg-greyLight bg-opacity-70 dark:bg-backdrop dark:bg-opacity-80",
                    wrapper: "absolute",
                }}
            >
                <ModalContent className="m-0">
                    <div className="relative w-full h-full px-[16px] tab:px-[24px] pc:px-[60px] py-[64px] pc:py-[72px]">
                        <BgImagesMobile />
                        <BgImagesTablet />
                        <BgImagesDesktop />

                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isError}
                            aria-label="close button"
                            className="cursor-pointer flex justify-center items-center absolute top-2 right-4 pc:top-3 pc:right-3 p-3 disabled:text-purple-strokeLight
                         dark:disabled:text-purple-stroke bg-transparent enabled:icon-hover-rounded-purple"
                        >
                            <IconCloseX />
                        </button>
                        <FormComponent
                            notificationHandler={notificationHandler}
                        />
                    </div>
                </ModalContent>
            </Modal> */}
        </div>
    );
};
