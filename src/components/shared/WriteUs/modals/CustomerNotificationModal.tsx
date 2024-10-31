import React from "react";

import { ErrorModal } from "../../Modals/ErrorModal";
import { SuccessModal } from "../../Modals/SuccessModal";

interface CustomerNotificationModalProps {
    isError: boolean;
    isShown: boolean;
    closeNotification: () => void;
    successCloseFn: () => void;
}

export const CustomerNotificationModal = ({
    closeNotification,
    isError,
    isShown,
    successCloseFn,
}: CustomerNotificationModalProps) => {
    const errorShown = isError && isShown;
    const successShown = !isError && isShown;

    const onCloseSuccessModal = () => {
        closeNotification();
        successCloseFn();
    };
    return (
        <>
            <ErrorModal closeFn={closeNotification} isShown={errorShown} />
            <SuccessModal
                closeFn={onCloseSuccessModal}
                isShown={successShown}
            />
        </>
    );
};
