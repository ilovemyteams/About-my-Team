import { Dispatch, SetStateAction } from "react";

import { ModalBase } from "@/src/components/shared/Modals/ModalBase";
import { SubmitFnType } from "@/types/FormInModalProps";

import { ConfirmForm } from "./ConfirmForm";
import HeartBook from "./HeartBook";
import { ModalDecorations } from "./ModalDecorations";

interface ConfirmModalProps {
    isOpen: boolean;
    onCloseModal: () => void;
    setIsError: Dispatch<SetStateAction<boolean>>;
    setIsNotificationShawn: Dispatch<SetStateAction<boolean>>;
    setDisabledCertificate: Dispatch<SetStateAction<boolean>>;
}
export const ConfirmModal = ({
    isOpen,
    onCloseModal,
    setIsError,
    setIsNotificationShawn,
    setDisabledCertificate,
}: ConfirmModalProps) => {
    const notificationHandler = async (submitFn: SubmitFnType) => {
        try {
            await submitFn();
            onCloseModal();
            setDisabledCertificate(true);
        } catch (error) {
            setIsError(true);
            throw new Error("Form submission failed", { cause: error });
        } finally {
            setIsNotificationShawn(true);
        }
    };
    return (
        <ModalBase
            isOpen={isOpen}
            onCloseModal={onCloseModal}
            className="overflow-x-clip"
        >
            <div className="overflow-x-clip">
                <ModalDecorations />
                <HeartBook />
                <ConfirmForm notificationHandler={notificationHandler} />
            </div>
        </ModalBase>
    );
};
