"use client";
import { useState } from "react";

import { Home } from "@/types/sanity.types";

import { NotificationModal } from "./NotificationModal";
import { WriteUsModal } from "./WriteUsModal";

interface WriteUsProps {
    className?: string;
    data: Home | null;
}

export const WriteUs = ({ className, data }: WriteUsProps) => {
    const [isError, setIsError] = useState(false);
    const [isNotificationShawn, setIsNotificationShawn] = useState(false);

    return (
        <>
            <WriteUsModal
                className={className}
                isError={isError}
                setIsError={setIsError}
                setIsNotificationShawn={setIsNotificationShawn}
                data={data?.data}
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
