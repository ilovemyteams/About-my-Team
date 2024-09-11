"use client";
import { useTranslations } from "next-intl";

import { ModalsWithForm } from "@/src/components/shared/ModalsWithForm/ModalsWithForm";

import { FaqCtaForm } from "../form/AskUsForm";

export const AskUsModal = () => {
    const getTranslation = useTranslations("Buttons");
    return (
        <ModalsWithForm
            formComponent={FaqCtaForm}
            triggerBtnTitle={getTranslation("writeUs")}
        />
    );
};
