"use client";
import { ComponentType, useState } from "react";

import { TriggerComponentProps } from "@/types/FormInModalProps";

import { FormModal } from "./modals/FormModal";
import { NotificationModal } from "./modals/NotificationModal";

interface AskUsModalProps {
    triggerComponent: ComponentType<TriggerComponentProps>;
}

export const AskUsModalBase = ({ triggerComponent }: AskUsModalProps) => {
    const [isError, setIsError] = useState(false);
    const [isNotificationShawn, setIsNotificationShawn] = useState(false);

    const onCLoseNotification = () => {
        setIsError(false);
        setIsNotificationShawn(false);
    };

    return (
        <>
            <FormModal
                isError={isError}
                setIsError={setIsError}
                setIsNotificationShawn={setIsNotificationShawn}
                triggerComponent={triggerComponent}
            />
            <NotificationModal
                isError={isError}
                isShown={isNotificationShawn}
                closeNotification={onCLoseNotification}
            />
        </>
    );
};
