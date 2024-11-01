"use client";

import { useState } from "react";

import { useRouter } from "@/src/navigation";

import { CustomerFormModal } from "./modals/CustomerFormModal";
import { CustomerNotificationModal } from "./modals/CustomerNotificationModal";

interface WriteUsModalProps {
    previousUrl?: string;
}
export const WriteUsModal = ({ previousUrl }: WriteUsModalProps) => {
    const [isError, setIsError] = useState(false);
    const [isNotificationShawn, setIsNotificationShawn] = useState(false);
    const router = useRouter();

    const onExitFromParallelRoute = () => {
        if (previousUrl) {
            router.push(previousUrl, {});
        } else {
            router.back();
        }
    };

    const onCLoseNotification = () => {
        setIsError(false);
        setIsNotificationShawn(false);
    };

    return (
        <>
            <CustomerFormModal
                isError={isError}
                setIsError={setIsError}
                setIsNotificationShawn={setIsNotificationShawn}
                onExitFromParallelRoute={onExitFromParallelRoute}
            />
            <CustomerNotificationModal
                closeNotification={onCLoseNotification}
                successCloseFn={onExitFromParallelRoute}
                isError={isError}
                isShown={isNotificationShawn}
            />
        </>
    );
};
