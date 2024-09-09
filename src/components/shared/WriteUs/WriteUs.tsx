"use client";
import { useState } from "react";

import { InternationalizedArrayString } from "@/types/sanity.types";

import { NotificationModal } from "./NotificationModal";
import { WriteUsModal } from "./WriteUsModal";

interface WriteUsProps {
    className?: string;
    buttonName: InternationalizedArrayString;
}

export const WriteUs = ({ className, buttonName }: WriteUsProps) => {
    const [isError, setIsError] = useState(false);
    const [isNotificationShawn, setIsNotificationShawn] = useState(false);

    return (
        <>
            <WriteUsModal
                className={className}
                isError={isError}
                setIsError={setIsError}
                setIsNotificationShawn={setIsNotificationShawn}
                buttonName={buttonName}
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
