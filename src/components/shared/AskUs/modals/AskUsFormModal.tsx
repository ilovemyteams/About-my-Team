"use client";

import { ComponentType, Dispatch, SetStateAction, useState } from "react";

import { TriggerComponentProps } from "@/types/FormInModalProps";
import { SubmitFnType } from "@/types/FormInModalProps";

import { ModalBase } from "../../Modals/ModalBase";
import { BgImagesDesktop } from "../../Modals/modalBgImages/contentModals/BgImagesDesktop";
import { BgImagesMobile } from "../../Modals/modalBgImages/contentModals/BgImagesMobile";
import { BgImagesTablet } from "../../Modals/modalBgImages/contentModals/BgImagesTablet";
import { AskUsForm } from "../form/AskUsForm";

interface AskUsFormModalProps {
    isError: boolean;
    setIsError: Dispatch<SetStateAction<boolean>>;
    setIsNotificationShawn: Dispatch<SetStateAction<boolean>>;
    triggerComponent: ComponentType<TriggerComponentProps>;
    className?: string;
}

export const AskUsFormModal = ({
    isError,
    setIsError,
    setIsNotificationShawn,
    triggerComponent: TriggerComponent,
    className,
}: AskUsFormModalProps) => {
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

    return (
        <div className={className}>
            <TriggerComponent
                modalOpenHandler={onOpenModal}
                isModalOpen={isModalOpen}
            />
            <ModalBase
                isOpen={isModalOpen}
                onCloseModal={onCloseModal}
                isCloseDisabled={isError}
            >
                <BgImagesMobile />
                <BgImagesTablet />
                <BgImagesDesktop />
                <AskUsForm notificationHandler={notificationHandler} />
            </ModalBase>
        </div>
    );
};
