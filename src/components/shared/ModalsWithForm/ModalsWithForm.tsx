"use client";

import { ComponentType, useState } from "react";

import { FormInModalProps } from "@/types/FormInModalProps";

import { FormModal } from "./modals/FormModal";
import { NotificationModal } from "./modals/NotificationModal";

interface ModalsWithFormProps {
    formComponent: ComponentType<FormInModalProps>;
    triggerBtnTitle: string;
    className?: string;
}

export const ModalsWithForm = ({
    formComponent: FormComponent,
    triggerBtnTitle,
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
                formComponent={FormComponent}
                triggerBtnTitle={triggerBtnTitle}
                className={className}
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
