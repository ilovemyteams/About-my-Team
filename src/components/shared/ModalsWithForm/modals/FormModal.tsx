"use client";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { ComponentType, Dispatch, SetStateAction } from "react";

import { SCREEN_NAMES } from "@/src/constants/screenNames";
import { useScreenSize } from "@/src/hooks/useScreenSize";
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
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const screenSizeName = useScreenSize();
    const { mobileName, tabletName } = SCREEN_NAMES;

    const notificationHandler = async (submitFn: SubmitFnType) => {
        try {
            await submitFn();
            onClose();
        } catch (error) {
            setIsError(true);
            throw new Error("Form submission failed", { cause: error });
        } finally {
            setIsNotificationShawn(true);
        }
    };

    const placement = screenSizeName === mobileName ? "top" : "center";

    return (
        <div className={className}>
            <TriggerComponent modalOpenHandler={onOpen} isModalOpen={isOpen} />
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement={placement}
                radius="none"
                shouldBlockScroll={
                    screenSizeName !== mobileName &&
                    screenSizeName !== tabletName
                }
                hideCloseButton={true}
                className="max-h-[90dvh] top-7 tab:top-0 overflow-y-auto scroll min-w-[320px] max-w-[360px] tab:min-w-[660px] pc:min-w-[750px] bg-white-100 dark:bg-purple-400 no-doc-scroll"
                classNames={{
                    backdrop:
                        "bg-greyLight bg-opacity-70 dark:bg-backdrop dark:bg-opacity-80",
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
            </Modal>
        </div>
    );
};
