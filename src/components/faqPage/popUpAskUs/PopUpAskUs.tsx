"use client";

import { useUserActivityMonitor } from "@/src/hooks/useUserActivityMonitor";

import { ModalsWithForm } from "../../shared/ModalsWithForm/ModalsWithForm";
import { AskUsForm } from "../сtaSection/form/AskUsForm";
import { withActiveUserData } from "./withActiveUserData";

export const PopUpAskUs = () => {
    const { isUserNotActive, setUserActive } = useUserActivityMonitor();

    const triggerComponent = withActiveUserData(isUserNotActive, setUserActive);

    return (
        <ModalsWithForm
            formComponent={AskUsForm}
            triggerComponent={triggerComponent}
        />
    );
};
