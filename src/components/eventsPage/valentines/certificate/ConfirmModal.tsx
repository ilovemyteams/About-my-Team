import React from "react";

import { ModalBase } from "@/src/components/shared/Modals/ModalBase";

interface ConfirmModalProps {
    isOpen: boolean;
    onCloseModal: () => void;
}
export const ConfirmModal = ({ isOpen, onCloseModal }: ConfirmModalProps) => {
    return (
        <ModalBase isOpen={isOpen} onCloseModal={onCloseModal}>
            <div>Modal</div>
        </ModalBase>
    );
};
