"use client";

import { Dispatch, SetStateAction, useState } from "react";

import { SubmitFnType } from "@/types/FormInModalProps";

import { ModalBase } from "../../Modals/ModalBase";
import { BgImagesDesktop } from "../../Modals/modalBgImages/contentModals/BgImagesDesktop";
import { BgImagesMobile } from "../../Modals/modalBgImages/contentModals/BgImagesMobile";
import { BgImagesTablet } from "../../Modals/modalBgImages/contentModals/BgImagesTablet";
import { CustomerForm } from "../form/CustomerForm";

interface CustomerFormModalProps {
    isError: boolean;
    setIsError: Dispatch<SetStateAction<boolean>>;
    setIsNotificationShawn: Dispatch<SetStateAction<boolean>>;
    onExitFromParallelRoute: () => void;
}

export const CustomerFormModal = ({
    isError,
    setIsError,
    setIsNotificationShawn,
    onExitFromParallelRoute,
}: CustomerFormModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const notificationHandler = async (submitFn: SubmitFnType) => {
        try {
            await submitFn();
            setIsModalOpen(false);
        } catch (error) {
            setIsError(true);
            throw new Error("Form submission failed", { cause: error });
        } finally {
            setIsNotificationShawn(true);
        }
    };

    return (
        <ModalBase
            isOpen={isModalOpen}
            onCloseModal={onExitFromParallelRoute}
            isCloseDisabled={isError}
            key={"order-modal"}
        >
            <BgImagesMobile />
            <BgImagesTablet />
            <BgImagesDesktop />
            <CustomerForm notificationHandler={notificationHandler} />
        </ModalBase>
    );
};
