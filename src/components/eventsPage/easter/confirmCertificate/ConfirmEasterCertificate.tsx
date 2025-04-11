import { useState } from "react";

import { AskUsNotificationModal } from "@/src/components/shared/AskUs/modals/AskUsNotificationModal";

import { ConfirmModal } from "./ConfirmModal";

interface ConfirmEasterCertificateProps {
    isOpen: boolean;
    onCloseModal: () => void;
    onFixEgg: () => void;
    onEnableBtn: () => void;
}

export const ConfirmEasterCertificate = ({
    isOpen,
    onCloseModal,
    onFixEgg,
    onEnableBtn,
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
                onFixEgg={onFixEgg}
                onEnableBtn={onEnableBtn}
            />
            <AskUsNotificationModal
                isError={isError}
                isShown={isNotificationShawn}
                closeNotification={onCLoseNotification}
            />
        </>
    );
};
