import { useState } from "react";

import { AskUsNotificationModal } from "@/src/components/shared/AskUs/modals/AskUsNotificationModal";

import { ConfirmModal } from "./ConfirmModal";

interface ConfirmEasterCertificateProps {
    isOpen: boolean;
    onCloseModal: () => void;
}

export const ConfirmEasterCertificate = ({
    isOpen,
    onCloseModal,
}: ConfirmEasterCertificateProps) => {
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
            />
            <AskUsNotificationModal
                isError={isError}
                isShown={isNotificationShawn}
                closeNotification={onCLoseNotification}
            />
        </>
    );
};
