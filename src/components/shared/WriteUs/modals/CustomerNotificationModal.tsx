import React from "react";

import { ErrorModal } from "../../Modals/ErrorModal";
import { SuccessModal } from "../../Modals/SuccessModal";

interface CustomerNotificationModalProps {
    isError: boolean;
    isShown: boolean;
    closeNotification: () => void;
}

export const CustomerNotificationModal = ({
    closeNotification,
    isError,
    isShown,
}: CustomerNotificationModalProps) => {
    const errorShown = isError && isShown;
    const successShown = !isError && isShown;
    return (
        <>
            <ErrorModal closeFn={closeNotification} isShown={errorShown} />
            <SuccessModal closeFn={closeNotification} isShown={successShown} />
        </>
    );
};
