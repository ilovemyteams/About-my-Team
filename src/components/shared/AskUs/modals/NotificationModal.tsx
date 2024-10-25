import React from "react";

import { ErrorModal } from "../../Modals/ErrorModal";
import { SuccessModal } from "../../Modals/SuccessModal";

interface NotificationModalProps {
    isError: boolean;
    isShown: boolean;
    closeNotification: () => void;
}

export const NotificationModal = ({
    closeNotification,
    isError,
    isShown,
}: NotificationModalProps) => {
    const errorShown = isError && isShown;
    const successShown = !isError && isShown;
    return (
        <>
            <ErrorModal closeFn={closeNotification} isShown={errorShown} />
            <SuccessModal closeFn={closeNotification} isShown={successShown} />
        </>
    );
};
