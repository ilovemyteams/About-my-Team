import React from "react";

import { ModalBase } from "../../shared/Modals/ModalBase";
import { ConfirmForm } from "./ConfirmForm";

interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ConfirmModal = ({ isOpen, onClose }: ConfirmModalProps) => {
    const onCloseConfirmModal = () => {
        onClose();
    };
    return (
        <ModalBase
            isOpen={isOpen}
            onCloseModal={onCloseConfirmModal}
            appearance="center"
        >
            <ConfirmForm />
        </ModalBase>
    );
};
