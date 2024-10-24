"use client";

import { ModalsWithForm } from "../ModalsWithForm/ModalsWithForm";
import { CustomerForm } from "./CustomerForm";

interface WriteUsProps {
    className?: string;
}

export const WriteUsModal = ({ className }: WriteUsProps) => {
    const triggerComponent = () => {
        return null;
    };
    return (
        <ModalsWithForm
            formComponent={CustomerForm}
            triggerComponent={triggerComponent}
            className={className}
        />
    );
};
