"use client";

import { ComponentType, useState } from "react";

import {
    FormInModalProps,
    TriggerComponentProps,
} from "@/types/FormInModalProps";

import { FormModal } from "./modals/FormModal";
import { NotificationModal } from "./modals/NotificationModal";

interface ModalsWithFormProps {
    formComponent: ComponentType<FormInModalProps>;
    triggerComponent: ComponentType<TriggerComponentProps>;
    defaultOpen?: boolean;
    className?: string;
}

export const ModalsWithForm = ({
    formComponent,
    triggerComponent,
    defaultOpen = false,
    className,
}: ModalsWithFormProps) => {
    const [isError, setIsError] = useState(false);
    const [isNotificationShawn, setIsNotificationShawn] = useState(false);

    return (
        <>
            <FormModal
                setIsError={setIsError}
                isError={isError}
                setIsNotificationShawn={setIsNotificationShawn}
                formComponent={formComponent}
                className={className}
                triggerComponent={triggerComponent}
                defaultOpen={defaultOpen}
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
