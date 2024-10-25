"use client";
import { ComponentType, useState } from "react";

import { TriggerComponentProps } from "@/types/FormInModalProps";

import { AskUsFormModal } from "./modals/AskUsFormModal";
import { AskUsNotificationModal } from "./modals/AskUsNotificationModal";

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
            <AskUsFormModal
                isError={isError}
                setIsError={setIsError}
                setIsNotificationShawn={setIsNotificationShawn}
                triggerComponent={triggerComponent}
            />
            <AskUsNotificationModal
                isError={isError}
                isShown={isNotificationShawn}
                closeNotification={onCLoseNotification}
            />
        </>
    );
};
