"use client";

import { ElementType, useState } from "react";

import { FormModal } from "./modals/FormModal";
import { NotificationModal } from "./modals/NotificationModal";

interface SendUserDataModalsProps {
    formComponent: ElementType;
    triggerBtnTitle: string;
}

export const SendUserDataModals = ({
    formComponent: FormComponent,
    triggerBtnTitle,
}: SendUserDataModalsProps) => {
    const [isError, setIsError] = useState(false);
    const [isNotificationShawn, setIsNotificationShawn] = useState(false);

    return (
        <>
            <FormModal
                setIsError={setIsError}
                setIsNotification={setIsNotificationShawn}
                formComponent={FormComponent}
                triggerBtnTitle={triggerBtnTitle}
            />

            <NotificationModal
                isError={isError}
                isNotificationShawn={isNotificationShawn}
                setIsError={setIsError}
                setIsNotificationShawn={setIsNotificationShawn}
            />
        </>
    );
};
