"use client";
import { ModalsWithForm } from "@/src/components/shared/ModalsWithForm/ModalsWithForm";

import { AskUsForm } from "../../faqPage/сtaSection/form/AskUsForm";
import { AskUsButton } from "./AskUsButton";

export const CtaAskUsModal = () => {
    return (
        <ModalsWithForm
            formComponent={AskUsForm}
            triggerComponent={AskUsButton}
        />
    );
};
