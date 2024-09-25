"use client";

import { useTrackingActivity } from "@/src/hooks/useTrackingActivity";

import { ModalsWithForm } from "../../shared/ModalsWithForm/ModalsWithForm";
import { AskUsForm } from "../сtaSection/form/AskUsForm";
import { withActiveUserData } from "./withActiveUserData";

export const PopUpAskUs = () => {
    const { isUserNotActive, setUserActive } = useTrackingActivity();

    const triggerComponent = withActiveUserData(isUserNotActive, setUserActive);

    return (
        <ModalsWithForm
            formComponent={AskUsForm}
            triggerComponent={triggerComponent}
        />
    );
};
