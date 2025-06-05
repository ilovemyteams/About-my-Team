"use client";

import { ModalsWithForm } from "@/src/components/shared/ModalsWithForm/ModalsWithForm";

import { AskUsForm } from "../form/AskUsForm";
import { AskUsBtn } from "./AskUsBtn";

export const AskUsModal = () => {
    return (
        <ModalsWithForm formComponent={AskUsForm} triggerComponent={AskUsBtn} />
    );
};
