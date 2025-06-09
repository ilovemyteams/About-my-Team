"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/src/components/shared/Button";
import { TriggerComponentProps } from "@/types/FormInModalProps";

export const AskUsButton = ({ modalOpenHandler }: TriggerComponentProps) => {
    const getTranslation = useTranslations("Buttons");

    const onClickButton = () => {
        modalOpenHandler();
    };

    return <Button onClick={onClickButton}>{getTranslation("writeUs")}</Button>;
};
