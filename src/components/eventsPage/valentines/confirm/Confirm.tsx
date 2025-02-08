"use client";
import { Dispatch, SetStateAction, useState } from "react";

import { AskUsNotificationModal } from "@/src/components/shared/AskUs/modals/AskUsNotificationModal";

import { ConfirmModal } from "./ConfirmModal";

interface ConfirmProps {
    isOpen: boolean;
    onCloseModal: () => void;
    setDisabledCertificate: Dispatch<SetStateAction<boolean>>;
}

export const Confirm = ({
    isOpen,
    onCloseModal,
    setDisabledCertificate,
}: ConfirmProps) => {
    const [isError, setIsError] = useState(false);
    const [isNotificationShawn, setIsNotificationShawn] = useState(false);

    const onCLoseNotification = () => {
        setIsError(false);
        setIsNotificationShawn(false);
    };

    return (
        <>
            <ConfirmModal
                isOpen={isOpen}
                onCloseModal={onCloseModal}
                setIsError={setIsError}
                setIsNotificationShawn={setIsNotificationShawn}
                setDisabledCertificate={setDisabledCertificate}
            />
            <AskUsNotificationModal
                isError={isError}
                isShown={isNotificationShawn}
                closeNotification={onCLoseNotification}
            />
        </>
    );
};
