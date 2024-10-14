"use client";

import { useTranslations } from "next-intl";

import { useSettingsContext } from "@/src/utils/SettingsSanityContext";

import { ModalsWithForm } from "../ModalsWithForm/ModalsWithForm";
import { CustomerForm } from "./CustomerForm";
import { WriteUsBtn } from "./WriteUsBtn";

interface WriteUsProps {
    className?: string;
}

export const WriteUs = ({ className }: WriteUsProps) => {
    const getTranslation = useTranslations("Buttons");
    const { data } = useSettingsContext();
    const buttonNameString = data?.buttonOrder?.buttonName
        ? data.buttonOrder.buttonName.toString()
        : getTranslation("order");

    return (
        <ModalsWithForm
            formComponent={CustomerForm}
            triggerBtnTitle={buttonNameString}
            triggerComponent={WriteUsBtn}
            className={className}
        />
    );
};
