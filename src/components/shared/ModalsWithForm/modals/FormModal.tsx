"use client";

import { ComponentType, Dispatch, SetStateAction, useState } from "react";

import {
    FormInModalProps,
    TriggerComponentProps,
} from "@/types/FormInModalProps";
import { SubmitFnType } from "@/types/FormInModalProps";

import { ModalBase } from "../../Modals/ModalBase";
import { BgImagesDesktop } from "../modalBgImages/formModalBgImages/BgImagesDesktop";
import { BgImagesMobile } from "../modalBgImages/formModalBgImages/BgImagesMobile";
import { BgImagesTablet } from "../modalBgImages/formModalBgImages/BgImagesTablet";

interface FormModalProps {
    isError: boolean;
    setIsError: Dispatch<SetStateAction<boolean>>;
    setIsNotificationShawn: Dispatch<SetStateAction<boolean>>;
    formComponent: ComponentType<FormInModalProps>;
    triggerComponent: ComponentType<TriggerComponentProps>;
    defaultOpen: boolean;
    className?: string;
}

export const FormModal = ({
    isError,
    setIsError,
    setIsNotificationShawn,
    formComponent: FormComponent,
    triggerComponent: TriggerComponent,
    defaultOpen,
    className,
}: FormModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState(() => defaultOpen);

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
                <FormComponent notificationHandler={notificationHandler} />
            </ModalBase>
        </div>
    );
};
