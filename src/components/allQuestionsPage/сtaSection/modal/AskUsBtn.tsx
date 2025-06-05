"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/src/components/shared/Button";
import { useUserActivityMonitor } from "@/src/hooks/useUserActivityMonitor";
import { TriggerComponentProps } from "@/types/FormInModalProps";

export const AskUsBtn = ({
    isModalOpen,
    modalOpenHandler,
}: TriggerComponentProps) => {
    const [checkClose, setCheckClose] = useState(false);
    const eventType = useRef<null | "click" | "timer">(null);
    const { isUserNotActive, setUserActive, setUserInactivity } =
        useUserActivityMonitor();
    const getTranslation = useTranslations("Buttons");

    //Open modal if user not active
    useEffect(() => {
        if (isUserNotActive && !checkClose) {
            modalOpenHandler();
            setCheckClose(true);
            eventType.current = "timer";
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isUserNotActive]);

    //Start monitor user active, when close modal
    useEffect(() => {
        if (!isModalOpen && isUserNotActive && checkClose) {
            setUserActive(eventType.current === "click");
            setCheckClose(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isModalOpen, isUserNotActive]);

    const onClickButton = () => {
        modalOpenHandler();
        setCheckClose(true);
        setUserInactivity();
        eventType.current = "click";
    };

    return <Button onClick={onClickButton}>{getTranslation("writeUs")}</Button>;
};
