"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { NotificationModal } from "./NotificationModal";
import { WriteUsModal } from "./WriteUsModal";

export const WriteUs = () => {
    const [isError, setIsError] = useState(false);
    const [isNotificationShawn, setIsNotificationShawn] = useState(false);

    const getTranslation = useTranslations("Notifications");
    return (
        <>
            <WriteUsModal
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
            />
        </>
    );
};
