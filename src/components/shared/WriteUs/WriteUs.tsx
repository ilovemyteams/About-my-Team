"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { NotificationModal } from "./NotificationModal";
import { WriteUsModal } from "./WriteUsModal";

interface WriteUsProps {
    className?: string;
}

export const WriteUs = ({ className }: WriteUsProps) => {
    const [isError, setIsError] = useState(false);
    const [isNotificationShawn, setIsNotificationShawn] = useState(false);

    const getTranslation = useTranslations("Notifications");
    return (
        <>
            <WriteUsModal
                className={className}
                isError={isError}
                setIsError={setIsError}
                setIsNotificationShawn={setIsNotificationShawn}
            />
            <NotificationModal
                title={
                    isError
                        ? getTranslation("somethingWrong")
                        : getTranslation("thankYou")
                }
                textMessage={
                    isError
                        ? getTranslation("tryAgain")
                        : getTranslation("waitResponse")
                }
                isNotificationShawn={isNotificationShawn}
                isError={isError}
                setIsError={setIsError}
                setIsNotificationShawn={setIsNotificationShawn}
            />
        </>
    );
};
