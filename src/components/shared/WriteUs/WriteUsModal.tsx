"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { TriggerComponentProps } from "@/types/FormInModalProps";

import { ModalsWithForm } from "../ModalsWithForm/ModalsWithForm";
import { CustomerForm } from "./CustomerForm";

interface WriteUsModalProps {
    previousUrl?: string;
}
export const WriteUsModal = ({ previousUrl }: WriteUsModalProps) => {
    const router = useRouter();

    const TriggerComponent = ({ isModalOpen }: TriggerComponentProps) => {
        useEffect(() => {
            if (!isModalOpen) {
                return previousUrl ? router.push(previousUrl) : router.back();
            }
        }, [isModalOpen]);

        return null;
    };

    return (
        <ModalsWithForm
            formComponent={CustomerForm}
            triggerComponent={TriggerComponent}
            defaultOpen={true}
        />
    );
};
