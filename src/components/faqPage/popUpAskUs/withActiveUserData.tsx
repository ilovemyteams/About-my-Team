"use client";

import { useEffect, useState } from "react";

import { TriggerComponentProps } from "@/types/FormInModalProps";

export const withActiveUserData = (
    isUserNotActive: boolean,
    setUserActive: () => void
) => {
    return ({ isModalOpen, modalOpenHandler }: TriggerComponentProps) => {
        const [checkClose, setCheckClose] = useState(false);

        useEffect(() => {
            if (isUserNotActive) {
                modalOpenHandler();
                setCheckClose(true);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [isUserNotActive]);

        useEffect(() => {
            if (!isModalOpen && isUserNotActive && checkClose) {
                setUserActive();
                setCheckClose(false);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [isModalOpen, isUserNotActive]);

        return null;
    };
};
