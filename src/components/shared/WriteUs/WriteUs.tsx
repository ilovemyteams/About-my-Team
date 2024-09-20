"use client";
import { useTranslations } from "next-intl";

import { ModalsWithForm } from "../ModalsWithForm/ModalsWithForm";
import { CustomerForm } from "./CustomerForm";

interface WriteUsProps {
    className?: string;
}

export const WriteUs = ({ className }: WriteUsProps) => {
    const getTranslation = useTranslations("Buttons");

    return (
        <ModalsWithForm
            formComponent={CustomerForm}
            triggerBtnTitle={getTranslation("order")}
            className={className}
        />
    );
};
