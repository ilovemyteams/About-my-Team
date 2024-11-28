"use client";
import { useEffect, useRef, useState } from "react";

import {
    FIRST_USER_INACTIVITY_TIMEOUT,
    SECOND_USER_INACTIVITY_TIMEOUT,
} from "../constants/userInactivityTimeout";

export const useUserActivityMonitor = () => {
    const [isUserNotActive, setIsUserNotActive] = useState(false);

    const eventOpenCounter = useRef<number>(1);

    const activeTimeoutId = useRef<
        null | ReturnType<typeof setTimeout> | "start"
    >("start");

    const updateUserActivity = () => {
        let value;
        if (sessionStorage) {
            value = sessionStorage.getItem("askModal") === "no";
        }
        if (!value && activeTimeoutId.current) {
            const delay =
                eventOpenCounter.current === 2
                    ? SECOND_USER_INACTIVITY_TIMEOUT
                    : FIRST_USER_INACTIVITY_TIMEOUT;

            activeTimeoutId.current !== "start" &&
                clearTimeout(activeTimeoutId.current);

            activeTimeoutId.current = setTimeout(setUserInactivity, delay);
        }
    };

    const setUserInactivity = () => {
        activeTimeoutId.current && clearTimeout(activeTimeoutId.current);
        setIsUserNotActive(true);
        activeTimeoutId.current = null;
    };

    const setUserActive = (isClickEvent: boolean) => {
        setIsUserNotActive(false);
        if (eventOpenCounter.current < 2) {
            activeTimeoutId.current = "start";
            if (!isClickEvent) {
                eventOpenCounter.current += 1;
            }
        } else {
            sessionStorage.setItem("askModal", "no");
        }
    };

    useEffect(() => {
        updateUserActivity();
        window.addEventListener("click", updateUserActivity);
        window.addEventListener("keypress", updateUserActivity);
        window.addEventListener("scroll", updateUserActivity);
        window.addEventListener("mousemove", updateUserActivity);

        return () => {
            window.removeEventListener("click", updateUserActivity);
            window.removeEventListener("keypress", updateUserActivity);
            window.removeEventListener("scroll", updateUserActivity);
            window.removeEventListener("mousemove", updateUserActivity);
            activeTimeoutId.current &&
                activeTimeoutId.current !== "start" &&
                clearTimeout(activeTimeoutId.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        isUserNotActive,
        setUserActive,
        setUserInactivity,
    };
};
