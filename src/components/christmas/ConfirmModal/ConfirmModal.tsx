import { useState } from "react";

import { SubmitFnType } from "@/types/FormInModalProps";

import { AskUsNotificationModal } from "../../shared/AskUs/modals/AskUsNotificationModal";
import { ModalBase } from "../../shared/Modals/ModalBase";
import { BgImagesDesktop } from "../../shared/Modals/modalBgImages/contentModals/BgImagesDesktop";
import { BgImagesMobile } from "../../shared/Modals/modalBgImages/contentModals/BgImagesMobile";
import { BgImagesTablet } from "../../shared/Modals/modalBgImages/contentModals/BgImagesTablet";
import { ConfirmForm } from "./ConfirmForm";

interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    discount: number | null;
}

export const ConfirmModal = ({
    isOpen,
    onClose,
    discount,
}: ConfirmModalProps) => {
    const [isError, setIsError] = useState(false);
    const [isNotificationShawn, setIsNotificationShawn] = useState(false);

    const onCloseConfirmModal = () => {
        onClose();
    };

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

    const onCLoseNotification = () => {
        setIsError(false);
        setIsNotificationShawn(false);
    };
    return (
        <>
            <ModalBase
                isOpen={isOpen}
                onCloseModal={onCloseConfirmModal}
                isCloseDisabled={isError}
            >
                <BgImagesMobile />
                <BgImagesTablet />
                <BgImagesDesktop />

                <ConfirmForm
                    notificationHandler={notificationHandler}
                    discount={discount}
                />
            </ModalBase>
            <AskUsNotificationModal
                closeNotification={onCLoseNotification}
                isError={isError}
                isShown={isNotificationShawn}
            />
        </>
    );
};
