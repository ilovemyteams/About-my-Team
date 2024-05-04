"use client";
import { useState } from "react";
import { NotificationModal } from "./NotificationModal";
import { WriteUsModal } from "./WriteUsModal";

interface WriteUsProps {
    className?: string;
}

export const WriteUs = ({ className }: WriteUsProps) => {
    const [isError, setIsError] = useState(false);
    const [isNotificationShawn, setIsNotificationShawn] = useState(true);

    return (
        <>
            <WriteUsModal
                className={className}
                isError={isError}
                setIsError={setIsError}
                setIsNotificationShawn={setIsNotificationShawn}
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
