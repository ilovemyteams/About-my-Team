import React from "react";

import { ErrorModal } from "../../Modals/ErrorModal";
import { SuccessModal } from "../../Modals/SuccessModal";

interface AskUsNotificationModalProps {
    isError: boolean;
    isShown: boolean;
    closeNotification: () => void;
}

export const AskUsNotificationModal = ({
    closeNotification,
    isError,
    isShown,
}: AskUsNotificationModalProps) => {
    const errorShown = isError && isShown;
    const successShown = !isError && isShown;
    return (
        <>
            <ErrorModal closeFn={closeNotification} isShown={errorShown} />
            <SuccessModal closeFn={closeNotification} isShown={successShown} />
        </>
    );
};
