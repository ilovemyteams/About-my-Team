"use client";

import { useEffect, useState } from "react";

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

    useEffect(() => {
        if (previousUrl) {
            router.prefetch(previousUrl);
        }
    }, [previousUrl, router]);

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
                previousUrl={previousUrl}
            />
            <CustomerNotificationModal
                closeNotification={onCLoseNotification}
                isError={isError}
                isShown={isNotificationShawn}
            />
        </>
    );
};
