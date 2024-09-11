"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { FormModal } from "../ModalsWithForm/modals/FormModal";
import { NotificationModal } from "../ModalsWithForm/modals/NotificationModal";
import { CustomerForm } from "./CustomerForm";

interface WriteUsProps {
    className?: string;
}

export const WriteUs = ({ className }: WriteUsProps) => {
    const [isError, setIsError] = useState(false);
    const [isNotificationShawn, setIsNotificationShawn] = useState(false);

    const getTranslation = useTranslations("Buttons");

    return (
        <>
            <FormModal
                className={className}
                isError={isError}
                setIsError={setIsError}
                setIsNotificationShawn={setIsNotificationShawn}
                formComponent={CustomerForm}
                triggerBtnTitle={getTranslation("order")}
            />
            <NotificationModal
                isNotificationShawn={isNotificationShawn}
                isError={isError}
                setIsError={setIsError}
                setIsNotificationShawn={setIsNotificationShawn}
            />
        </>
    );
};
