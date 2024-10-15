"use client";
import { useTranslations } from "next-intl";
import React from "react";

import { Button } from "@/src/components/shared/Button";
import { useSettingsContext } from "@/src/utils/SettingsSanityContext";
import { TriggerComponentProps } from "@/types/FormInModalProps";

export const WriteUsBtn = ({ modalOpenHandler }: TriggerComponentProps) => {
    const getTranslation = useTranslations("Buttons");
    const { data } = useSettingsContext();
    const buttonNameString = data?.buttonOrder?.buttonName
        ? data.buttonOrder.buttonName.toString()
        : getTranslation("order");

    const onClickButton = () => {
        modalOpenHandler();
    };

    return <Button onClick={onClickButton}>{buttonNameString}</Button>;
};
